import { useEffect, useMemo, useState } from "react";
import {
  BadgeCheck,
  Mail,
  Send,
  Server,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import {
  launchCampaign,
  sendTestEmail,
  type AudienceContact,
  type CampaignDraft,
  type SenderProfile,
} from "@/lib/emailMarketing";

const STORAGE_KEY = "reachquix-email-marketing-draft";

const defaultSenderProfile: SenderProfile = {
  providerLabel: "",
  fromName: "",
  fromEmail: "",
  replyTo: "",
  smtpHost: "",
  smtpPort: "587",
  smtpUsername: "",
  smtpPassword: "",
  encryption: "tls",
  trackingDomain: "",
  dailySendLimit: "250",
};

const defaultCampaignDraft: CampaignDraft = {
  campaignName: "",
  subject: "",
  previewText: "",
  sendAt: "",
  content: "",
};

const defaultAudienceInput = `email,name,company
jane@acme.com,Jane Doe,Acme
ahmed@northstar.ai,Ahmed Ali,Northstar AI`;

const inputClassName =
  "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";

const textareaClassName =
  "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";

const parseAudience = (input: string): AudienceContact[] => {
  const lines = input
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length === 0) {
    return [];
  }

  const hasHeader = /^email\s*,/i.test(lines[0]);
  const dataLines = hasHeader ? lines.slice(1) : lines;

  return dataLines
    .map((line) => {
      const [email = "", name = "", company = ""] = line.split(",").map((value) => value.trim());
      return {
        email,
        name: name || undefined,
        company: company || undefined,
      };
    })
    .filter((contact) => contact.email);
};

const EmailMarketing = () => {
  const [senderProfile, setSenderProfile] = useState<SenderProfile>(defaultSenderProfile);
  const [campaign, setCampaign] = useState<CampaignDraft>(defaultCampaignDraft);
  const [audienceInput, setAudienceInput] = useState(defaultAudienceInput);
  const [testRecipient, setTestRecipient] = useState("");
  const [isTesting, setIsTesting] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);

  useEffect(() => {
    const savedDraft = window.localStorage.getItem(STORAGE_KEY);
    if (!savedDraft) {
      return;
    }

    try {
      const parsed = JSON.parse(savedDraft) as {
        senderProfile?: SenderProfile;
        campaign?: CampaignDraft;
        audienceInput?: string;
        testRecipient?: string;
      };

      setSenderProfile({ ...defaultSenderProfile, ...parsed.senderProfile });
      setCampaign({ ...defaultCampaignDraft, ...parsed.campaign });
      setAudienceInput(parsed.audienceInput || defaultAudienceInput);
      setTestRecipient(parsed.testRecipient || "");
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        senderProfile,
        campaign,
        audienceInput,
        testRecipient,
      }),
    );
  }, [audienceInput, campaign, senderProfile, testRecipient]);

  const audience = useMemo(() => parseAudience(audienceInput), [audienceInput]);
  const hasRequiredCampaignFields =
    Boolean(senderProfile.fromName) &&
    Boolean(senderProfile.fromEmail) &&
    Boolean(senderProfile.smtpHost) &&
    Boolean(senderProfile.smtpPort) &&
    Boolean(senderProfile.smtpUsername) &&
    Boolean(senderProfile.smtpPassword) &&
    Boolean(campaign.campaignName) &&
    Boolean(campaign.subject) &&
    Boolean(campaign.content) &&
    audience.length > 0;

  const updateSenderProfile = <K extends keyof SenderProfile>(key: K, value: SenderProfile[K]) => {
    setSenderProfile((current) => ({ ...current, [key]: value }));
  };

  const updateCampaign = <K extends keyof CampaignDraft>(key: K, value: CampaignDraft[K]) => {
    setCampaign((current) => ({ ...current, [key]: value }));
  };

  const handleTestSend = async () => {
    if (!testRecipient) {
      toast.error("Enter a test recipient email first.");
      return;
    }

    setIsTesting(true);
    try {
      const response = await sendTestEmail({ senderProfile, testRecipient });
      toast.success(response.message || "Test email request sent.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unable to send the test email.");
    } finally {
      setIsTesting(false);
    }
  };

  const handleCampaignLaunch = async () => {
    if (!hasRequiredCampaignFields) {
      toast.error("Complete the required sender, campaign, and audience fields first.");
      return;
    }

    setIsLaunching(true);
    try {
      const response = await launchCampaign({
        senderProfile,
        campaign,
        audience,
      });
      toast.success(response.message || "Campaign launch request sent.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unable to launch the campaign.");
    } finally {
      setIsLaunching(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-1 pt-[72px]">
        <section className="bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
            <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">
                  <Sparkles size={16} />
                  Email marketing workspace
                </div>
                <h1 className="mt-6 font-heading text-4xl md:text-5xl leading-tight">
                  Launch campaigns using your own sending infrastructure
                </h1>
                <p className="mt-4 max-w-2xl text-base text-primary-foreground/85 md:text-lg">
                  Configure sender identity, SMTP delivery, audience, and campaign copy in one place.
                  Credentials stay in the form draft locally and actual delivery is delegated to a secure backend endpoint.
                </p>
                <div className="mt-8 flex flex-wrap gap-3 text-sm">
                  <div className="rounded-full bg-white/10 px-4 py-2">SMTP host, port, username, password</div>
                  <div className="rounded-full bg-white/10 px-4 py-2">Required sender identity fields</div>
                  <div className="rounded-full bg-white/10 px-4 py-2">Audience import and campaign launch</div>
                </div>
              </div>

              <Card className="border-white/15 bg-white/10 text-primary-foreground shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">What this page enables</CardTitle>
                  <CardDescription className="text-primary-foreground/75">
                    A production-safe flow for collecting all required fields before sending.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Server className="mt-0.5" size={18} />
                    <span>Store the delivery configuration fields your backend needs to authenticate with SMTP.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="mt-0.5" size={18} />
                    <span>Prepare a contact list from CSV-style rows with email, name, and company data.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Send className="mt-0.5" size={18} />
                    <span>Send a test email and submit a real campaign launch request to your mail API.</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto w-full px-6 py-12 md:py-16">
          <Tabs defaultValue="setup" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="setup">Sender setup</TabsTrigger>
              <TabsTrigger value="campaign">Campaign builder</TabsTrigger>
              <TabsTrigger value="delivery">Delivery</TabsTrigger>
            </TabsList>

            <TabsContent value="setup" className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Hosting and sender fields</CardTitle>
                    <CardDescription>
                      These are the minimum fields typically required by an SMTP-backed mail service.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4 md:grid-cols-2">
                    <div className="md:col-span-2">
                      <label className="mb-2 block text-sm font-medium">Provider label</label>
                      <input
                        className={inputClassName}
                        value={senderProfile.providerLabel}
                        onChange={(event) => updateSenderProfile("providerLabel", event.target.value)}
                        placeholder="Google Workspace, Mailgun relay, Namecheap Private Email"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">From name *</label>
                      <input
                        className={inputClassName}
                        value={senderProfile.fromName}
                        onChange={(event) => updateSenderProfile("fromName", event.target.value)}
                        placeholder="Reachquix Team"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">From email *</label>
                      <input
                        className={inputClassName}
                        type="email"
                        value={senderProfile.fromEmail}
                        onChange={(event) => updateSenderProfile("fromEmail", event.target.value)}
                        placeholder="campaigns@yourdomain.com"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Reply-to email</label>
                      <input
                        className={inputClassName}
                        type="email"
                        value={senderProfile.replyTo}
                        onChange={(event) => updateSenderProfile("replyTo", event.target.value)}
                        placeholder="reply@yourdomain.com"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">SMTP host *</label>
                      <input
                        className={inputClassName}
                        value={senderProfile.smtpHost}
                        onChange={(event) => updateSenderProfile("smtpHost", event.target.value)}
                        placeholder="smtp.gmail.com"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">SMTP port *</label>
                      <input
                        className={inputClassName}
                        value={senderProfile.smtpPort}
                        onChange={(event) => updateSenderProfile("smtpPort", event.target.value)}
                        placeholder="587"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Encryption *</label>
                      <Select
                        value={senderProfile.encryption}
                        onValueChange={(value) => updateSenderProfile("encryption", value as SenderProfile["encryption"])}
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select encryption" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ssl">SSL</SelectItem>
                          <SelectItem value="tls">TLS</SelectItem>
                          <SelectItem value="starttls">STARTTLS</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">SMTP username *</label>
                      <input
                        className={inputClassName}
                        value={senderProfile.smtpUsername}
                        onChange={(event) => updateSenderProfile("smtpUsername", event.target.value)}
                        placeholder="campaigns@yourdomain.com"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">SMTP password *</label>
                      <input
                        className={inputClassName}
                        type="password"
                        value={senderProfile.smtpPassword}
                        onChange={(event) => updateSenderProfile("smtpPassword", event.target.value)}
                        placeholder="App password or SMTP secret"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Tracking domain</label>
                      <input
                        className={inputClassName}
                        value={senderProfile.trackingDomain}
                        onChange={(event) => updateSenderProfile("trackingDomain", event.target.value)}
                        placeholder="click.yourdomain.com"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Daily send limit</label>
                      <input
                        className={inputClassName}
                        type="number"
                        min="1"
                        value={senderProfile.dailySendLimit}
                        onChange={(event) => updateSenderProfile("dailySendLimit", event.target.value)}
                        placeholder="250"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Field checklist</CardTitle>
                    <CardDescription>Use these settings before attempting a test or campaign send.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm text-muted-foreground">
                    <div className="flex items-start gap-3 rounded-lg bg-muted p-4">
                      <Shield size={18} className="mt-0.5 text-primary" />
                      <span>Never send SMTP credentials directly from frontend code. This page forwards them to your backend endpoint only when you trigger an action.</span>
                    </div>
                    <div className="flex items-start gap-3 rounded-lg border p-4">
                      <BadgeCheck size={18} className="mt-0.5 text-primary" />
                      <span>Required fields: from name, from email, SMTP host, port, username, password, campaign name, subject, body, and at least one audience contact.</span>
                    </div>
                    <div className="flex items-start gap-3 rounded-lg border p-4">
                      <Mail size={18} className="mt-0.5 text-primary" />
                      <span>Recommended extras: reply-to, tracking domain, send limit, preview text, and a scheduled send time.</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="campaign" className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Campaign details</CardTitle>
                    <CardDescription>Create the email copy and metadata to send.</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div>
                      <label className="mb-2 block text-sm font-medium">Campaign name *</label>
                      <input
                        className={inputClassName}
                        value={campaign.campaignName}
                        onChange={(event) => updateCampaign("campaignName", event.target.value)}
                        placeholder="Q2 product launch outreach"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Subject line *</label>
                      <input
                        className={inputClassName}
                        value={campaign.subject}
                        onChange={(event) => updateCampaign("subject", event.target.value)}
                        placeholder="A faster way to run outbound email"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Preview text</label>
                      <input
                        className={inputClassName}
                        value={campaign.previewText}
                        onChange={(event) => updateCampaign("previewText", event.target.value)}
                        placeholder="See how your team can send compliant campaigns from one dashboard."
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Send at</label>
                      <input
                        className={inputClassName}
                        type="datetime-local"
                        value={campaign.sendAt}
                        onChange={(event) => updateCampaign("sendAt", event.target.value)}
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Email body *</label>
                      <textarea
                        className={textareaClassName}
                        rows={12}
                        value={campaign.content}
                        onChange={(event) => updateCampaign("content", event.target.value)}
                        placeholder={`Hi {{name}},\n\nI noticed {{company}} is growing fast.\n\nReachquix helps your team run email campaigns with your own sending infrastructure.\n\nWould you like a quick walkthrough?\n\nBest,\n{{fromName}}`}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Audience import</CardTitle>
                    <CardDescription>Paste CSV rows using `email,name,company`.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <textarea
                      className={textareaClassName}
                      rows={16}
                      value={audienceInput}
                      onChange={(event) => setAudienceInput(event.target.value)}
                      placeholder="email,name,company"
                    />
                    <div className="rounded-lg bg-muted p-4 text-sm text-muted-foreground">
                      Parsed contacts: <span className="font-semibold text-foreground">{audience.length}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="delivery" className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Test delivery</CardTitle>
                    <CardDescription>Verify the sender settings before sending the full campaign.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="mb-2 block text-sm font-medium">Test recipient email</label>
                      <input
                        className={inputClassName}
                        type="email"
                        value={testRecipient}
                        onChange={(event) => setTestRecipient(event.target.value)}
                        placeholder="you@company.com"
                      />
                    </div>
                    <Button onClick={handleTestSend} disabled={isTesting} className="w-full">
                      {isTesting ? "Sending test..." : "Send test email"}
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Launch campaign</CardTitle>
                    <CardDescription>
                      This sends `senderProfile`, `campaign`, and `audience` to
                      `VITE_EMAIL_MARKETING_API_BASE_URL`.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-3 md:grid-cols-2">
                      <div className="rounded-lg border p-4 text-sm">
                        <div className="text-muted-foreground">Campaign</div>
                        <div className="mt-1 font-semibold">{campaign.campaignName || "Not set"}</div>
                      </div>
                      <div className="rounded-lg border p-4 text-sm">
                        <div className="text-muted-foreground">Audience size</div>
                        <div className="mt-1 font-semibold">{audience.length}</div>
                      </div>
                      <div className="rounded-lg border p-4 text-sm">
                        <div className="text-muted-foreground">From</div>
                        <div className="mt-1 font-semibold">{senderProfile.fromEmail || "Not set"}</div>
                      </div>
                      <div className="rounded-lg border p-4 text-sm">
                        <div className="text-muted-foreground">SMTP endpoint</div>
                        <div className="mt-1 font-semibold">{senderProfile.smtpHost || "Not set"}</div>
                      </div>
                    </div>
                    <Button onClick={handleCampaignLaunch} disabled={isLaunching || !hasRequiredCampaignFields} className="w-full">
                      {isLaunching ? "Launching..." : "Launch email campaign"}
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      If the send buttons fail immediately, add a backend URL in
                      `VITE_EMAIL_MARKETING_API_BASE_URL` that exposes `/test-email` and `/campaigns/send`.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EmailMarketing;
