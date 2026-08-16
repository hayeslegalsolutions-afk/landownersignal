export function PlaceholderNotice({ note }: { note: string }) {
  return (
    <div className="rounded border border-dashed border-slate-400 bg-slate-50 px-4 py-3 text-sm text-slate-600">
      <span className="font-semibold">Placeholder.</span> {note}
    </div>
  );
}
