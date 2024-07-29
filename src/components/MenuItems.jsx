import Link from "next/link";

export default function MenuItems({ title, address, Icon }) {
  return (
    <Link href={address} className=" hover:text-blue-500 transition">
      <Icon className=" text-2xl sm:hidden" />
      <p className=" uppercase hidden sm:inline text-sm font-semibold">{title}</p>
    </Link>
  );
}
