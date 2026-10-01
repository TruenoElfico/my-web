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
      className="flex h-11 w-11 items-center justify-center rounded-full opacity-70 transition hover:opacity-100"
    >
      <Image src={icon} alt="" width={26} height={26} />
    </a>
  );
}
