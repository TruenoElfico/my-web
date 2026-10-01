import Image from "next/image";

interface Props {
  icon: string;
  label: string;
  href: string;
}

export default function SocialIcon({ icon, label, href }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full opacity-70 transition hover:opacity-100"
    >
      <Image src={icon} alt="" width={18} height={18} />
    </a>
  );
}
