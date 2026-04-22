import Image from "next/image";
import Link from "next/link";
import styles from "./privacy.module.css";

export default function PrivacyPage() {
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <div className={styles.navWrap}>
          <Image src="/logo.png" className={styles.logoMark} alt="Dokka" width={34} height={34} />
          <Link href="/" className={styles.logo}>
            Hub<span>Inc</span>
          </Link>
        </div>
      </nav>

      <main className={styles.policyContainer}>
        <h1>Privacy Policy</h1>
        <div className={styles.lastUpdated}>Last Updated: March 2026</div>

        <p>
          Welcome to HubInc. Your privacy is critically important to us. This Privacy Policy
          explains how we collect, use, and protect your information when you use the Hub app
          and website as your academic companion.
        </p>

        <h2>1. Information We Collect</h2>
        <p>To provide you with a seamless academic experience, we collect the following types of information:</p>
        <ul>
          <li>
            <strong>Account Information:</strong> When you create an account or log in via your phone,
            we collect authentication details to secure your academic profile.
          </li>
          <li>
            <strong>User-Generated Content:</strong> We store the academic data you create within the
            app. This includes your batch timetables and group announcements.
          </li>
          <li>
            <strong>Usage Data:</strong> We collect standard, anonymized app analytics to help us
            squash bugs, improve app stability, and understand which features students use the most.
          </li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the data we collect strictly to provide and improve our core services:</p>
        <ul>
          <li>To sync your timetables, study notes, and chats across your devices.</li>
          <li>To facilitate communication between you and your classmates in our chat channels.</li>
          <li>To deliver relevant academic announcements and app updates directly to your device.</li>
          <li>To maintain the security and integrity of our platform.</li>
        </ul>

        <h2>3. Data Sharing and Security</h2>
        <p>
          <strong>We do not sell your personal data to third parties.</strong> Your chat messages,
          personal notes, and schedules are private to you and the specific batches you choose to
          share them with.
        </p>
        <p>
          We utilize secure cloud infrastructure and encryption to ensure your academic data is
          protected against unauthorized access, alteration, or loss.
        </p>

        <h2>4. Your Choices and Rights</h2>
        <p>You have full control over your data within HubInc. You can:</p>
        <ul>
          <li>Edit, update, or delete your notes, chat messages, and timetables directly inside the app at any time.</li>
          <li>Request a complete deletion of your HubInc account and all associated data by contacting our support team.</li>
        </ul>

        <h2>5. Changes to This Policy</h2>
        <p>
          We may occasionally update this Privacy Policy as we add new features (such as our upcoming
          iOS App Store release). If we make significant changes to how we handle your data, we will
          notify you through the app&apos;s announcement feature.
        </p>

        <h2>6. Contact Us</h2>
        <p>
          If you have any questions, concerns, or feedback regarding this Privacy Policy, please
          reach out to us at{" "}
          <a className={styles.emailLink} href="mailto:support@hubinc.in">
            support@hubinc.in
          </a>
          .
        </p>

        <div className={styles.termsCta}>
          <p>
            For more information on how you may use HubInc and your responsibilities as a user,
            please read our <Link href="/terms">Terms and Conditions</Link>.
          </p>
        </div>
      </main>
    </div>
  );
}
