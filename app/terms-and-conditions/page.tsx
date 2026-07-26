import type { Metadata } from "next";
import { LegalHeader } from "@/components/sections/legal-header";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms and conditions governing your use of the PostHire app and website.",
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

export default function TermsAndConditionsPage() {
  return (
    <>
      <LegalHeader />
      <main className="section-pad relative">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow mb-4">Legal</p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Terms &amp; Conditions
            </h1>
            <p className="mt-3 text-sm text-muted-2">Last updated: July 2026</p>

            <div className="glass mt-10 rounded-3xl p-6 sm:p-10">
              <p className="text-[15px] leading-relaxed text-muted">
                By using PostHire, you agree to these Terms.
              </p>

              <Section title="1. Eligibility">
                <p>You must be at least 13 years old to use PostHire.</p>
              </Section>

              <Section title="2. Accounts">
                <p>You are responsible for:</p>
                <List
                  items={[
                    "Keeping your account secure",
                    "Providing accurate information",
                    "Maintaining your login credentials",
                  ]}
                />
              </Section>

              <Section title="3. Acceptable Use">
                <p>You agree NOT to:</p>
                <List
                  items={[
                    "Upload illegal or harmful content",
                    "Spam users",
                    "Harass or abuse others",
                    "Impersonate another person",
                    "Attempt to hack or disrupt the platform",
                    "Submit fake campaigns or fraudulent opportunities",
                  ]}
                />
              </Section>

              <Section title="4. User Content">
                <p>
                  You retain ownership of the content you upload. By posting
                  content on PostHire, you grant us permission to display it
                  within the platform for the purpose of operating the
                  service.
                </p>
              </Section>

              <Section title="5. Campaigns">
                <p>Founders are responsible for:</p>
                <List
                  items={[
                    "Providing accurate campaign information",
                    "Delivering agreed compensation",
                    "Respecting creator rights",
                  ]}
                />
                <p className="pt-2">Creators are responsible for:</p>
                <List
                  items={[
                    "Providing genuine portfolio information",
                    "Completing collaborations professionally",
                  ]}
                />
              </Section>

              <Section title="6. Payments">
                <p>
                  Currently, PostHire does not process payments within the
                  app. Any payment arrangements are handled directly between
                  users.
                </p>
              </Section>

              <Section title="7. Account Suspension">
                <p>
                  We may suspend or permanently remove accounts that violate
                  these Terms.
                </p>
              </Section>

              <Section title="8. Intellectual Property">
                <p>
                  The PostHire name, logo, branding, and platform are
                  protected intellectual property. You may not copy or
                  redistribute them without permission.
                </p>
              </Section>

              <Section title="9. Disclaimer">
                <p>
                  PostHire acts as a platform connecting creators and
                  founders. We do not guarantee:
                </p>
                <List
                  items={[
                    "Collaborations",
                    "Campaign success",
                    "Payments between users",
                    "Business outcomes",
                  ]}
                />
              </Section>

              <Section title="10. Limitation of Liability">
                <p>PostHire is not responsible for:</p>
                <List
                  items={[
                    "Disputes between users",
                    "Financial losses",
                    "Lost opportunities",
                    "User-generated content",
                  ]}
                />
              </Section>

              <Section title="11. Changes to Terms">
                <p>
                  We may update these Terms from time to time. Continued use
                  of the app means you accept the updated Terms.
                </p>
              </Section>

              <Section title="12. Contact">
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
