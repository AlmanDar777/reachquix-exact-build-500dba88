import { useState, useEffect, useRef, forwardRef } from "react";
import { Bot, X, Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import { supabase } from "@/integrations/supabase/client";

interface Message {
  id: string;
  text: string;
  sender: "eva" | "user";
}

const EvaChatbot = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [qaData, setQaData] = useState<{ question: string; answer: string }[]>([]);
  const [sessionId] = useState(() => crypto.randomUUID());
  const [shouldBounce, setShouldBounce] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    supabase
      .from("eva_qa")
      .select("question, answer")
      .eq("is_active", true)
      .then(({ data }) => {
        if (data) setQaData(data);
      });
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShouldBounce(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    setShouldBounce(false);
    if (messages.length === 0) {
      setMessages([
        { id: crypto.randomUUID(), text: t("eva.welcome"), sender: "eva" },
      ]);
    }
  };

  const findAnswer = (question: string): string => {
    const q = question.toLowerCase();
    for (const qa of qaData) {
      const keywords = qa.question.toLowerCase().split(/\s+/);
      const matchCount = keywords.filter((kw) => kw.length > 3 && q.includes(kw)).length;
      if (matchCount >= 2 || q.includes(qa.question.toLowerCase().slice(0, 20))) {
        return qa.answer;
      }
    }
    return t("eva.fallback");
  };

  const handleSend = async () => {
    const text = input.trim();
    if (!text) return;
    setInput("");

    const userMsg: Message = { id: crypto.randomUUID(), text, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);

    const answer = findAnswer(text);
    setTimeout(() => {
      const evaMsg: Message = { id: crypto.randomUUID(), text: answer, sender: "eva" };
      setMessages((prev) => [...prev, evaMsg]);
    }, 600);

    await supabase.from("eva_conversations").insert({
      session_id: sessionId,
      visitor_message: text,
      eva_response: answer,
    });
  };

  return (
    <div ref={ref} className="contents">
      {!isOpen && (
        <>
          {/* Speech bubble */}
          <div
            className={`fixed z-[9999] bottom-8 right-[88px] max-sm:bottom-[76px] max-sm:right-6 max-sm:left-auto max-sm:translate-x-0 ${shouldBounce ? "eva-bubble-bounce" : ""}`}
            style={{
              animation: "evaFadeIn 500ms ease forwards",
            }}
          >
            <div
              style={{
                background: "#fff",
                borderRadius: 12,
                padding: "8px 14px",
                boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                fontSize: 13,
                fontWeight: 500,
                color: "#0A0A0A",
                fontFamily: "Inter, sans-serif",
                whiteSpace: "nowrap",
                position: "relative",
              }}
            >
              Hi! I'm Eva 👋
              {/* Arrow pointing right (desktop) */}
              <span
                className="max-sm:hidden"
                style={{
                  position: "absolute",
                  top: "50%",
                  right: -6,
                  transform: "translateY(-50%)",
                  width: 0,
                  height: 0,
                  borderTop: "6px solid transparent",
                  borderBottom: "6px solid transparent",
                  borderLeft: "6px solid #fff",
                }}
              />
              {/* Arrow pointing down (mobile) */}
              <span
                className="hidden max-sm:block"
                style={{
                  position: "absolute",
                  bottom: -6,
                  right: 12,
                  width: 0,
                  height: 0,
                  borderLeft: "6px solid transparent",
                  borderRight: "6px solid transparent",
                  borderTop: "6px solid #fff",
                }}
              />
            </div>
          </div>

          <button
            onClick={handleOpen}
            className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
            style={{ animation: "evaPulse 2s infinite" }}
            title={t("eva.tooltip")}
            aria-label={t("eva.tooltip")}
          >
            <Bot size={24} />
          </button>
        </>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 z-[9999] w-[380px] h-[520px] max-sm:w-[calc(100vw-24px)] max-sm:h-[70vh] max-sm:bottom-3 max-sm:right-3 max-sm:rounded-2xl rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-border bg-background">
          <div className="bg-primary px-4 py-3 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <span className="font-heading text-lg text-primary-foreground">{t("eva.title")}</span>
              <span className="flex items-center gap-1 text-xs text-primary-foreground/80">
                <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
                {t("eva.online")}
              </span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-primary-foreground/80 hover:text-primary-foreground cursor-pointer p-1" aria-label={t("common.closeChat")}>
              <X size={20} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg) => (
              <div key={msg.id} className={`max-w-[80%] rounded-xl px-4 py-2.5 text-sm font-body ${msg.sender === "eva" ? "bg-muted text-foreground self-start" : "bg-primary text-primary-foreground self-end ms-auto"}`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="border-t border-border p-3 flex gap-2 shrink-0">
            <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleSend()} placeholder={t("eva.placeholder")} className="flex-1 rounded-lg border border-input bg-background px-3 py-2 text-sm font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            <button onClick={handleSend} disabled={!input.trim()} className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors" aria-label={t("common.sendMessage")}>
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes evaPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes evaFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes evaBubbleBounce {
          0%, 100% { transform: translateY(0); }
          25% { transform: translateY(-4px); }
          50% { transform: translateY(0); }
          75% { transform: translateY(-2px); }
        }
        .eva-bubble-bounce {
          animation: evaBubbleBounce 1s ease infinite !important;
        }
        @media (max-width: 639px) {
          .eva-bubble-bounce {
            animation: evaBubbleBounce 1s ease infinite, evaFadeIn 500ms ease forwards !important;
          }
        }
      `}</style>
    </div>
  );
});

EvaChatbot.displayName = "EvaChatbot";

export default EvaChatbot;
