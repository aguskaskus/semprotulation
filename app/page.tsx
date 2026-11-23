"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Heart, Music2, Sparkles } from "lucide-react";
 
const photos = [
  {
    label: "A favorite moment",
    file: "https://drive.google.com/thumbnail?id=1uHxjdffs8C6JYaDH4N5ubDfZyc8lxPjc&sz=w1200",
  },
  {
    label: "A little memory",
    file: "https://drive.google.com/thumbnail?id=1J3lJFX5nabO9CaDi88Cj_aYOipn1sywN&sz=w1200",
  },
  {
    label: "One for the keeps",
    file: "https://drive.google.com/thumbnail?id=1lRqnf4993u8kP0YDlkyMikN5qIm2OFz5&sz=w1200",
  },
];

export default function Home() {
	const [opened, setOpened] = useState(false);
	const audioRef = useRef<HTMLAudioElement | null>(null);

	const handleOpen = () => {
		setOpened(true);
		if (audioRef.current) {
			audioRef.current.volume = 0.8;
			void audioRef.current.play().catch((error) => {
				console.warn("Audio could not be played:", error);
			});
		}
	};

	return (
		<main className="paper-grain min-h-screen overflow-hidden">
			<audio
				ref={audioRef}
				src="/music/background-music.mp3"
				preload="auto"
				loop
				className="hidden"
			/>

			<nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-10">
				<a href="#" className="serif text-lg tracking-wide">
					for Robiadut<span className="text-rose">.</span>
				</a>
				<span className="text-[10px] uppercase tracking-[.28em] text-muted">
					A little celebration
				</span>
			</nav>

			<AnimatePresence mode="wait">
				{!opened ? (
					<motion.section
						key="intro"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0, y: -16 }}
						className="flex min-h-[78vh] items-center justify-center px-6"
					>
						<div className="w-full max-w-2xl text-center">
							<motion.div
								initial={{ y: 18, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.8 }}
								className="mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-[#dfd2c8] bg-white/60 text-rose"
							>
								<Heart size={21} strokeWidth={1.4} />
							</motion.div>
							<p className="mb-5 text-[10px] uppercase tracking-[.35em] text-muted">
								A note made just for you
							</p>
							<h1 className="serif text-5xl leading-[1.08] tracking-tight sm:text-7xl">
								A little surprise
								<br />
								<span className="italic text-rose">for you, Robiadut.</span>
							</h1>
							<p className="mx-auto mt-7 max-w-md text-sm leading-7 text-muted">
								Ada sesuatu kecil yang ingin aku sampaikan untuk merayakan salah
								satu langkah pentingmu.
							</p>
							<button
								onClick={handleOpen}
								className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#49423b] px-7 py-4 text-[10px] uppercase tracking-[.22em] text-white transition hover:bg-rose"
							>
								Open your surprise{" "}
								<ArrowUpRight
									size={15}
									className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
								/>
							</button>
							<p className="mt-8 text-[10px] tracking-[.12em] text-[#aaa097]">
								TAKE YOUR TIME · MADE WITH LOVE
							</p>
						</div>
					</motion.section>
				) : (
					<motion.div
						key="content"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.7 }}
					>
						<section className="mx-auto flex min-h-[78vh] max-w-5xl flex-col items-center justify-center px-6 py-20 text-center">
							<motion.div
								initial={{ scale: 0.7, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								transition={{ delay: 0.2, type: "spring" }}
								className="mb-8 text-rose"
							>
								<Sparkles size={25} strokeWidth={1.2} />
							</motion.div>
							<p className="mb-6 text-[10px] uppercase tracking-[.35em] text-muted">
								A moment worth celebrating
							</p>
							<h1 className="serif text-5xl leading-[1.1] sm:text-7xl">
								You did it,
								<br />
								<span className="italic text-rose">Robiadut.</span>
							</h1>
							<p className="mt-7 text-xs uppercase tracking-[.22em] text-muted">
								Congratulations on your seminar proposal
							</p>
							<div className="my-10 h-px w-16 bg-[#c9aaa2]" />
							<p className="max-w-xl text-sm leading-8 text-[#756d64] sm:text-base">
								Satu langkah penting sudah berhasil kamu lewati. Semoga semua usaha
								dan waktu yang kamu berikan selama ini menjadi awal dari banyak hal
								baik yang menunggu di depan.
							</p>
							<a
								href="#message"
								className="mt-12 inline-flex items-center gap-2 text-[10px] uppercase tracking-[.22em] text-muted hover:text-rose"
							>
								Read a little note{" "}
								<ArrowDown size={14} />
							</a>
						</section>

						<section id="message" className="px-6 py-24">
							<div className="mx-auto max-w-3xl border border-[#e7ded5] bg-[#fcfaf6]/80 px-7 py-14 soft-shadow sm:px-16 sm:py-20">
								<p className="text-center text-[10px] uppercase tracking-[.3em] text-rose">
									A little message for you
								</p>
								<h2 className="serif mt-5 text-center text-4xl italic sm:text-5xl">
									Dear Robiadut,
								</h2>
								<div className="mx-auto mt-10 max-w-xl space-y-5 text-sm leading-8 text-[#746c63]">
									<p>
										Selamat sudah melewati seminar proposal! Aku tahu sampai di titik
										ini pasti ada banyak proses, pikiran, dan usaha yang kamu lewati.
										Mungkin ada hari-hari yang terasa melelahkan, tapi hari ini kamu
										punya satu alasan lagi untuk bangga pada diri sendiri.
									</p>
									<p>
										Terima kasih sudah berusaha sejauh ini. Jangan lupa untuk
										menikmati pencapaian kecil ini sebelum kembali melangkah. Semoga
										proses berikutnya dimudahkan, diberi kelancaran, dan membawa kamu
										semakin dekat dengan apa yang kamu cita-citakan.
									</p>
									<p className="serif pt-3 text-lg italic text-[#9b716d]">
										I'm always proud of you. One step closer to your dreams.
									</p>
								</div>
								<div className="mt-12 text-center">
									<Heart
										className="mx-auto text-rose"
										size={18}
										fill="currentColor"
										strokeWidth={1}
									/>
									<p className="serif mt-3 text-lg italic text-[#746c63]">
										With love.
									</p>
								</div>
							</div>
						</section>

						<section className="mx-auto max-w-5xl px-6 py-20">
							<div className="mb-12 text-center">
								<p className="text-[10px] uppercase tracking-[.3em] text-rose">
									Little pieces of you
								</p>
								<h2 className="serif mt-4 text-4xl sm:text-5xl">
									Your memories<span className="italic text-rose">.</span>
								</h2>
								<p className="mt-4 text-xs text-muted">
									Beberapa momen yang ingin disimpan lebih lama.
								</p>
							</div>
							<div className="grid gap-7 sm:grid-cols-3">
								{photos.map((photo, index) => (
									<motion.div
										key={photo.file}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ delay: index * 0.12 }}
										className={`bg-white p-3 pb-5 soft-shadow ${
											index === 1 ? "sm:mt-8" : ""
										}`}
									>
										<div className="photo-placeholder relative flex aspect-[4/5] items-center justify-center overflow-hidden">
											{photo.file ? (
												<img
													src={photo.file}
													alt={photo.label}
													className="h-full w-full object-cover"
												/>
											) : (
												<div className="px-5 text-center">
													<Heart
														className="mx-auto mb-3 text-[#b58b83]"
														size={21}
														strokeWidth={1.2}
													/>
													<p className="text-[10px] uppercase tracking-[.2em] text-[#806f66]">
														Your next photo goes here
													</p>
													<p className="mt-2 text-[10px] text-[#9b8b80]">
														photo-3.jpeg
													</p>
												</div>
											)}
										</div>
										<p className="serif mt-4 text-center text-sm italic text-[#746c63]">
											{photo.label}
										</p>
									</motion.div>
								))}
							</div>
						</section>

						<section className="px-6 py-20">
							<div className="mx-auto max-w-xl border-y border-[#e5dbd1] py-12 text-center">
								<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#eee5dc] text-rose">
									<Music2 size={19} />
								</div>
								<p className="mt-5 text-[10px] uppercase tracking-[.3em] text-muted">
									A song for this moment
								</p>
								<h2 className="serif mt-3 text-3xl italic">Teh Hijau</h2>
								<p className="mt-2 text-xs text-muted">Tulus</p>
								<p className="mt-7 text-[10px] text-[#a49a90]">
								</p>
							</div>
						</section>

						<section className="px-6 py-28 text-center">
							<p className="text-[10px] uppercase tracking-[.3em] text-rose">
								And remember
							</p>
							<h2 className="serif mx-auto mt-6 max-w-3xl text-4xl leading-tight sm:text-6xl">
								One step closer
								<br />
								<span className="italic text-rose">to your dreams.</span>
							</h2>
							<p className="mt-7 text-sm text-muted">
								Selamat sempro, Robiadut. This is only the beginning.
							</p>
							<Heart className="mx-auto mt-10 text-rose" size={18} fill="currentColor" strokeWidth={1} />
						</section>
					</motion.div>
				)}
			</AnimatePresence>

			<footer className="border-t border-[#e8dfd6] px-6 py-7 text-center">
				<p className="serif text-sm italic text-muted">
					A little page, made with a lot of love.
				</p>
				<p className="mt-2 text-[9px] uppercase tracking-[.2em] text-[#aaa097]">
					For Robiadut · 2026
				</p>
			</footer>
		</main>
	);
}
