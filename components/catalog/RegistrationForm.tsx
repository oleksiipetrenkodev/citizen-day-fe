import { Button } from "@/components/ui/Button";
import styles from "./RegistrationForm.module.css";

export type RegistrationFormProps = {
  eventSlug: string;
  isFull?: boolean;
};

export function RegistrationForm({ eventSlug, isFull = false }: RegistrationFormProps) {
  const emailId = `registration-email-${eventSlug}`;
  const helpId = `${emailId}-help`;
  const titleId = `${emailId}-title`;

  return (
    <form className={styles.form} aria-labelledby={titleId}>
      <h2 id={titleId} className={styles.title}>
        {isFull ? "Join the waitlist" : "Register for this event"}
      </h2>
      <p className={styles.description}>
        Enter your email address and we’ll contact you with the next steps.
      </p>
      <div className={styles.field}>
        <label className={styles.label} htmlFor={emailId}>Email address</label>
        <input
          className={styles.input}
          id={emailId}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@example.com"
          aria-describedby={helpId}
          required
        />
        <span className={styles.help} id={helpId}>Registration is not connected yet.</span>
      </div>
      <Button fullWidth type="button" variant="secondary">
        {isFull ? "Join waitlist" : "Register with email"}
      </Button>
    </form>
  );
}
