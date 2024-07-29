'use client';
import { useEffect, useState } from 'react';
import Lenis from 'lenis'
import Intro from '@/components/Intro';
import Description from '@/components/Description';
import MoviesSection from '@/components/MoviesSection';
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  const [category, setCategory] = useState('all');

  useEffect(() => {
    if (router.isReady) {
      const { category } = router.query;
      if (category) {
        setCategory(category);
      }
    }
  }, [router.isReady, router.query]);

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main>
      <Intro />
      <Description />
      <MoviesSection category={category} setCategory={setCategory} />
    </main>
  );
}