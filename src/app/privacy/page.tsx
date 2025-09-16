import { Metadata } from "next";
import { Text } from "@once-ui-system/core";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Chanuka Weerakkody",
  description: "Privacy policy for Chanuka Weerakkody's portfolio website",
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Text as="h1" className="text-4xl font-bold mb-8">
        Privacy Policy
      </Text>

      <section className="mb-8">
        <Text as="p" className="mb-4">
          <strong>Last Updated:</strong> September 16, 2025
        </Text>
        <Text as="p" className="mb-4">
          Welcome to my personal portfolio website. I, Chanuka Weerakkody, am
          committed to protecting your privacy. This Privacy Policy explains how
          I collect, use, and safeguard your information when you visit my
          website.
        </Text>
      </section>

      <section className="mb-8">
        <Text as="h2" className="text-2xl font-semibold mb-4">
          1. Information I Collect
        </Text>
        <Text as="p" className="mb-4">
          I may collect the following types of information:
        </Text>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <Text as="span">
              Personal Information: Name, email address, and other contact
              details you provide through contact forms.
            </Text>
          </li>
          <li>
            <Text as="span">
              Usage Data: Information about how you use my website, including
              pages visited and time spent on the site.
            </Text>
          </li>
          <li>
            <Text as="span">
              Cookies: My website uses cookies to enhance your experience.
            </Text>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <Text as="h2" className="text-2xl font-semibold mb-4">
          2. How I Use Your Information
        </Text>
        <Text as="p" className="mb-4">
          I use the information I collect to:
        </Text>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <Text as="span">
              Respond to your inquiries and provide customer support
            </Text>
          </li>
          <li>
            <Text as="span">Improve my website and services</Text>
          </li>
          <li>
            <Text as="span">
              To send periodic emails (if you&apos;ve subscribed to my
              newsletter)
            </Text>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <Text as="h2" className="text-2xl font-semibold mb-4">
          3. Data Security
        </Text>
        <Text as="p" className="mb-4">
          I implement appropriate security measures to protect your personal
          information. However, please be aware that no method of transmission
          over the internet is 100% secure.
        </Text>
      </section>

      <section className="mb-8">
        <Text as="h2" className="text-2xl font-semibold mb-4">
          4. Third-Party Services
        </Text>
        <Text as="p" className="mb-4">
          My website may contain links to third-party websites. I have no
          control over and assume no responsibility for the content, privacy
          policies, or practices of any third-party sites.
        </Text>
      </section>

      <section className="mb-8">
        <Text as="h2" className="text-2xl font-semibold mb-4">
          5. Your Rights
        </Text>
        <Text as="p" className="mb-4">
          You have the right to:
        </Text>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <Text as="span">
              Access the personal information I hold about you
            </Text>
          </li>
          <li>
            <Text as="span">
              Request correction of your personal information
            </Text>
          </li>
          <li>
            <Text as="span">Request deletion of your personal information</Text>
          </li>
          <li>
            <Text as="span">Opt-out of marketing communications</Text>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <Text as="h2" className="text-2xl font-semibold mb-4">
          6. Changes to This Policy
        </Text>
        <Text as="p" className="mb-4">
          I may update this Privacy Policy from time to time. I will notify you
          of any changes by posting the new Privacy Policy on this page.
        </Text>
      </section>

      <section>
        <Text as="h2" className="text-2xl font-semibold mb-4">
          7. Contact Me
        </Text>
        <Text as="p" className="mb-4">
          If you have any questions about this Privacy Policy, please contact me
          at:
        </Text>
        <address className="not-italic">
          <Text as="p" className="mb-1">
            Email: chanuka.weerakkody123@gmail.com
          </Text>
          <Text as="p">
            Website:{" "}
            <Link href="https://chanuka-weerakkody.vercel.app">
              chanuka-weerakkody.vercel.app
            </Link>
          </Text>
        </address>
      </section>
    </div>
  );
}
