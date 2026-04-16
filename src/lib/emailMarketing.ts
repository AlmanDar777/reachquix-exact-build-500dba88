export type EmailEncryption = "ssl" | "tls" | "starttls";

export interface SenderProfile {
  providerLabel: string;
  fromName: string;
  fromEmail: string;
  replyTo: string;
  smtpHost: string;
  smtpPort: string;
  smtpUsername: string;
  smtpPassword: string;
  encryption: EmailEncryption;
  trackingDomain: string;
  dailySendLimit: string;
}

export interface CampaignDraft {
  campaignName: string;
  subject: string;
  previewText: string;
  sendAt: string;
  content: string;
}

export interface AudienceContact {
  email: string;
  name?: string;
  company?: string;
}

interface ApiResponse {
  message?: string;
}

const API_BASE_URL = import.meta.env.VITE_EMAIL_MARKETING_API_BASE_URL?.trim();

const getApiBaseUrl = () => {
  if (!API_BASE_URL) {
    throw new Error(
      "Set VITE_EMAIL_MARKETING_API_BASE_URL to a secure backend endpoint before sending emails.",
    );
  }

  return API_BASE_URL.replace(/\/+$/, "");
};

const postJson = async <TBody extends object>(
  path: string,
  body: TBody,
): Promise<ApiResponse> => {
  const response = await fetch(`${getApiBaseUrl()}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = (await response.json().catch(() => ({}))) as ApiResponse;

  if (!response.ok) {
    throw new Error(data.message || "The email marketing request failed.");
  }

  return data;
};

export const sendTestEmail = async (payload: {
  senderProfile: SenderProfile;
  testRecipient: string;
}) => postJson("/test-email", payload);

export const launchCampaign = async (payload: {
  senderProfile: SenderProfile;
  campaign: CampaignDraft;
  audience: AudienceContact[];
}) => postJson("/campaigns/send", payload);
