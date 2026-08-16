export function IntakeForm({
  documentTypeLabel,
  documentTypeOptions,
  detailsPlaceholder,
}: {
  documentTypeLabel: string;
  documentTypeOptions: { value: string; label: string }[];
  detailsPlaceholder: string;
}) {
  return (
    <form className="mt-8 space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="mt-1.5 block w-full rounded border border-slate-300 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="mt-1.5 block w-full rounded border border-slate-300 px-3 py-2 text-sm"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="mt-1.5 block w-full rounded border border-slate-300 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-slate-700">
            County / State of the property
          </label>
          <input
            id="location"
            name="location"
            type="text"
            placeholder="e.g. Reeves County, TX"
            className="mt-1.5 block w-full rounded border border-slate-300 px-3 py-2 text-sm"
          />
        </div>
      </div>

      <div>
        <label htmlFor="documentType" className="block text-sm font-medium text-slate-700">
          {documentTypeLabel}
        </label>
        <select
          id="documentType"
          name="documentType"
          className="mt-1.5 block w-full rounded border border-slate-300 px-3 py-2 text-sm"
          defaultValue=""
        >
          <option value="" disabled>
            Select one
          </option>
          {documentTypeOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="details" className="block text-sm font-medium text-slate-700">
          Tell us about your situation
        </label>
        <textarea
          id="details"
          name="details"
          rows={5}
          placeholder={detailsPlaceholder}
          className="mt-1.5 block w-full rounded border border-slate-300 px-3 py-2 text-sm"
        />
      </div>

      <div>
        <span className="block text-sm font-medium text-slate-700">Upload documents</span>
        <div className="mt-1.5 flex justify-center rounded border border-dashed border-slate-300 px-6 py-8 text-center">
          <p className="text-sm text-slate-500">File upload will be enabled in a later step.</p>
        </div>
      </div>

      <button
        type="submit"
        disabled
        className="inline-flex items-center justify-center rounded bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white opacity-60"
      >
        Submit Intake (coming soon)
      </button>
    </form>
  );
}
