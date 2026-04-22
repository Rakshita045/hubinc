import Image from "next/image";
import Link from "next/link";
import styles from "./terms.module.css";

export default function TermsPage() {
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
        <h1>Terms and Conditions</h1>
        <div className={styles.lastUpdated}>Last Updated: March 2026</div>

        <p>
          Welcome to HubInc. By downloading, accessing, or using the Hub app and website, you
          agree to be bound by these Terms and Conditions. Please read them carefully.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By creating an account or using Hub to manage your academic schedules, notes, or
          communications, you agree to these terms. If you do not agree with any part of these
          terms, you may not use our services.
        </p>

        <h2>2. User Accounts</h2>
        <p>
          To access certain features of Hub, such as batch timetables and group chats, you must
          register for an account. You are responsible for maintaining the confidentiality of your
          account credentials and for all activities that occur under your account.
        </p>

        <h2>3. Acceptable Use</h2>
        <p>Hub is designed to be an academic companion. You agree not to use the platform to:</p>
        <ul>
          <li>Share or distribute illegal, harmful, or offensive content in group chats or announcements.</li>
          <li>Spam other students or abuse the communication features.</li>
          <li>Upload notes or materials that violate copyright or intellectual property laws.</li>
          <li>Attempt to hack, disrupt, or compromise the security of the app or website.</li>
        </ul>

        <h2>4. User-Generated Content</h2>
        <p>
          You retain ownership of any notes, messages, or content you create and upload to Hub.
          However, by uploading content to shared spaces (like batch groups), you grant us a
          license to display and distribute that content to the intended recipients within the app.
        </p>

        <h2>5. Service Availability</h2>
        <p>
          While we strive to keep Hub running smoothly for all your academic needs, we do not
          guarantee that the service will be uninterrupted or error-free. We reserve the right to
          modify, suspend, or discontinue any part of the service at any time.
        </p>

        <h2>6. Termination</h2>
        <p>
          We reserve the right to suspend or terminate your access to Hub at our discretion,
          without notice, if you violate these Terms and Conditions or engage in conduct that harms
          other users or the platform.
        </p>

        <h2>7. Changes to Terms</h2>
        <p>
          We may update these Terms and Conditions occasionally. When we make significant changes,
          we will notify users through an in-app announcement. Continued use of Hub after any
          changes constitutes your acceptance of the new terms.
        </p>

        <h2>8. Contact Information</h2>
        <p>
          If you have any questions or concerns about these Terms and Conditions, please contact us
          at{" "}
          <a className={styles.emailLink} href="mailto:support@hubinc.in">
            support@hubinc.in
          </a>
          .
        </p>

        <div className={styles.privacyCta}>
          <p>
            For details on how we collect and process your information, please read our{" "}
            <Link href="/privacy">Privacy Policy</Link>.
          </p>
        </div>
      </main>
    </div>
  );
}
