import SignInSection from "@/components/pages/home/SignIn";

export const metadata = {
  title: 'Beranda',
  description: 'Generated by create next app',
}

export default function Home() {
  return (
    <main className="container">
      <SignInSection/>
    </main>
  );
}