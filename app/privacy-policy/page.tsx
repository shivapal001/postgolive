import type { Metadata } from "next";
import { LegalHeader } from "@/components/sections/legal-header";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How PostHire collects, uses, and protects your information across our app and website.",
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-white/8 py-8 first:border-t-0 first:pt-0">
      <h2 className="text-lg font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-muted">
        {children}
      </div>
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-violet-400" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <LegalHeader />
      <main className="section-pad relative">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow mb-4">Legal</p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-muted-2">Last updated: July 2026</p>

            <div className="glass mt-10 rounded-3xl p-6 sm:p-10">
              <p className="text-[15px] leading-relaxed text-muted">
                Welcome to PostHire. Your privacy is important to us. This
                Privacy Policy explains what information we collect, how we
                use it, and your rights when using the PostHire mobile
                application and website.
              </p>

              <Section title="1. Information We Collect">
                <p>When you create an account, we may collect:</p>
                <List
                  items={[
                    "Full name",
                    "Email address",
                    "Username",
                    "Profile photo",
                    "Bio",
                    "Social media links",
                    "Creator or founder role",
                    "Device information",
                    "App usage analytics",
                  ]}
                />
              </Section>

              <Section title="2. How We Use Your Information">
                <p>We use your information to:</p>
                <List
                  items={[
                    "Create and manage your account",
                    "Connect creators with founders and brands",
                    "Display your public profile",
                    "Enable messaging and notifications",
                    "Improve app performance",
                    "Prevent fraud and abuse",
                    "Provide customer support",
                  ]}
                />
              </Section>

              <Section title="3. Public Information">
                <p>Your public profile may include:</p>
                <List
                  items={[
                    "Name",
                    "Username",
                    "Profile picture",
                    "Bio",
                    "Portfolio",
                    "Social links",
                    "Creator statistics",
                  ]}
                />
                <p>
                  Only information you choose to make public will be visible
                  to other users.
                </p>
              </Section>

              <Section title="4. Messages">
                <p>
                  Messages are stored securely to enable communication
                  between creators and founders. We do not sell or share your
                  private conversations.
                </p>
              </Section>

              <Section title="5. Media Uploads">
                <p>
                  Images and portfolio content uploaded by users are stored
                  securely using trusted cloud storage providers.
                </p>
              </Section>

              <Section title="6. Third-Party Services">
                <p>PostHire uses trusted third-party services including:</p>
                <List
                  items={[
                    "Firebase Authentication",
                    "Firebase Firestore",
                    "Firebase Storage",
                    "Cloudinary",
                    "Google Sign-In (if enabled)",
                  ]}
                />
                <p>These services have their own privacy policies.</p>
              </Section>

              <Section title="7. Data Security">
                <p>
                  We use industry-standard security practices to protect your
                  data. However, no online service is completely secure.
                </p>
              </Section>

              <Section title="8. Children's Privacy">
                <p>
                  PostHire is intended for users aged 13 years or older. If we
                  learn that personal information has been collected from a
                  child under 13, we will remove it promptly.
                </p>
              </Section>

              <Section title="9. Your Rights">
                <p>You may:</p>
                <List
                  items={[
                    "Update your profile",
                    "Delete your account",
                    "Request deletion of your personal data",
                    "Contact us regarding your privacy",
                  ]}
                />
              </Section>

              <Section title="10. Changes">
                <p>
                  We may update this Privacy Policy periodically. The updated
                  version will always be available within the app and on our
                  website.
                </p>
              </Section>

              <Section title="11. Contact">
                <p>
                  Email:{" "}
                  <a
                    href="mailto:info.posthire@gmail.com"
                    className="text-violet-300 hover:underline"
                  >
                    info.posthire@gmail.com
                  </a>
                </p>
                <p>
                  Website:{" "}
                  <a
                    href="https://www.posthire.online"
                    className="text-violet-300 hover:underline"
                  >
                    https://www.posthire.online
                  </a>
                </p>
              </Section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
