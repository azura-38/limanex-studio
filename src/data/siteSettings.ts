export interface SocialLink {
  platform: string;
  url: string;
}

export interface SiteSettings {
  contact_email: string;
  support_email: string;
  social_links: SocialLink[];
  ai_banner_text: string;
  ai_section_visible: boolean;
}

export const siteSettings: SiteSettings = {
  contact_email: "limanexsoftware@outlook.com",
  support_email: "support@limanex.com",
  social_links: [
    { platform: "Twitter", url: "https://twitter.com/limanex" },
    { platform: "LinkedIn", url: "https://linkedin.com/company/limanex" }
  ],
  ai_banner_text: "AI-powered features coming soon",
  ai_section_visible: true
};
