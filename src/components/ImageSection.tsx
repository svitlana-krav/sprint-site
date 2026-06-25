export default function ImageSection() {
  return (
    <section className="w-full h-[100vw] max-h-[900px] min-h-[320px] overflow-hidden relative">
      <img
        src="/photo-section.jpg"
        alt=""
        aria-hidden="true"
        className="
          absolute inset-0 w-full h-full object-cover object-center
          md:object-[center_20%]
        "
      />
    </section>
  );
}
