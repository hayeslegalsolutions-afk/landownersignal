import Link from "next/link";

export function TermsCheckbox({
  checked,
  onChange,
  error,
  className = "",
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  error?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="flex items-start gap-2 text-sm text-ink-muted">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-line text-brand focus:ring-brand"
        />
        <span>
          I agree to the{" "}
          <Link href="/terms-of-use" target="_blank" className="font-medium text-brand underline">
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link href="/privacy-policy" target="_blank" className="font-medium text-brand underline">
            Privacy Policy
          </Link>
          .
        </span>
      </label>
      {error && (
        <p className="mt-1.5 text-sm font-medium text-signal-dark">
          Please agree to the Terms of Use and Privacy Policy to continue.
        </p>
      )}
    </div>
  );
}
