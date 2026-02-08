import { useState, useRef } from "react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentVerseIndex, setCurrentVerseIndex] = useState(0);
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const bibleVerses = [
    {
      verse:
        "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
      reference: "John 3:16",
      category: "Salvation",
    },
    {
      verse:
        "I am the way and the truth and the life. No one comes to the Father except through me.",
      reference: "John 14:6",
      category: "Faith",
    },
    {
      verse:
        "Come to me, all you who are weary and burdened, and I will give you rest.",
      reference: "Matthew 11:28",
      category: "Comfort",
    },
    {
      verse: "I can do all this through him who gives me strength.",
      reference: "Philippians 4:13",
      category: "Strength",
    },
    {
      verse:
        "Trust in the Lord with all your heart and lean not on your own understanding.",
      reference: "Proverbs 3:5",
      category: "Trust",
    },
    {
      verse: "The Lord is my shepherd, I lack nothing.",
      reference: "Psalm 23:1",
      category: "Peace",
    },
    {
      verse:
        "Love is patient, love is kind. It does not envy, it does not boast, it is not proud.",
      reference: "1 Corinthians 13:4",
      category: "Love",
    },
    {
      verse:
        "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
      reference: "Joshua 1:9",
      category: "Courage",
    },
  ];

  const nextVerse = () => {
    setCurrentVerseIndex((prev) => (prev + 1) % bibleVerses.length);
  };

  const prevVerse = () => {
    setCurrentVerseIndex(
      (prev) => (prev - 1 + bibleVerses.length) % bibleVerses.length,
    );
  };

  // const scrollToSection = (id: string) => {
  //   const element = document.getElementById(id);
  //   element?.scrollIntoView({ behavior: 'smooth' });
  //   setMobileMenuOpen(false);
  // };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <svg
                className="w-6 h-6 text-amber-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 2v20M2 12h20"
                />
              </svg>
              <span className="cursor-pointer font-semibold text-xl text-gray-900">
                The Way
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-amber-700 cursor-pointer transition-colors"
              >
                About Jesus
              </button>
              <button
                onClick={() => scrollToSection("teachings")}
                className="text-gray-700 hover:text-amber-700 cursor-pointer transition-colors"
              >
                Teachings
              </button>
              <button
                onClick={() => scrollToSection("scripture")}
                className="text-gray-700 hover:text-amber-700 cursor-pointer transition-colors"
              >
                Scripture
              </button>
              <button
                onClick={() => scrollToSection("prayer")}
                className="text-gray-700 hover:text-amber-700 cursor-pointer transition-colors"
              >
                Prayer
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6 cursor-pointer "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 cursor-pointer "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <button
                onClick={() => scrollToSection("about")}
                className="cursor-pointer block w-full text-left py-2 text-gray-700 hover:text-amber-700"
              >
                About Jesus
              </button>
              <button
                onClick={() => scrollToSection("teachings")}
                className="cursor-pointer block w-full text-left py-2 text-gray-700 hover:text-amber-700"
              >
                Teachings
              </button>
              <button
                onClick={() => scrollToSection("scripture")}
                className="cursor-pointer block w-full text-left py-2 text-gray-700 hover:text-amber-700"
              >
                Scripture
              </button>
              <button
                onClick={() => scrollToSection("prayer")}
                className="cursor-pointer block w-full text-left py-2 text-gray-700 hover:text-amber-700"
              >
                Prayer
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1561553475-fba050d7995c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXN1cyUyMGNocmlzdCUyMHN1bnNldCUyMGNyb3NzfGVufDF8fHx8MTc3MDUyMTUwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Cross at sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Jesus Christ</h1>
          <p className="text-xl md:text-2xl mb-8">
            The Way, The Truth, and The Life
          </p>
          <p className="text-lg md:text-xl italic mb-8">
            "For God so loved the world that he gave his one and only Son, that
            whoever believes in him shall not perish but have eternal life." -
            John 3:16
          </p>
          <button
            onClick={scrollToSection}
            className="cursor-pointer bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-full transition-colors"
          >
            Learn More
          </button>
        </div>
      </section>

      {/* About Section */}
      <section ref={sectionRef} id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            Who Is Jesus Christ?
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1550541231-56ddb7f844ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBzdGFpbmVkJTIwZ2xhc3N8ZW58MXx8fHwxNzcwNTA1NzA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Stained glass"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Jesus Christ is the central figure of Christianity, believed by
                Christians to be the Son of God and the promised Messiah
                prophesied in the Old Testament. He was born in Bethlehem over
                2,000 years ago and lived a life of perfect love, compassion,
                and obedience to God.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through His death on the cross and resurrection, Jesus provided
                the way for humanity to be reconciled with God. He taught about
                the Kingdom of God, performed miracles, and demonstrated God's
                unconditional love for all people.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Jesus offers forgiveness, hope, and eternal life to all who
                believe in Him. His teachings continue to transform lives and
                bring light to the world today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teachings Section */}
      <section id="teachings" className="py-20 px-4 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            The Teachings of Jesus
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <svg
                className="w-12 h-12 text-amber-700 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Love & Compassion
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Jesus taught us to love God with all our heart and to love our
                neighbors as ourselves. He showed compassion to the sick, the
                poor, and the outcasts.
              </p>
              <p className="text-sm italic text-gray-600">
                "Love your enemies and pray for those who persecute you." -
                Matthew 5:44
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <svg
                className="w-12 h-12 text-amber-700 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Forgiveness
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Jesus emphasized the importance of forgiveness, teaching us to
                forgive others as God forgives us. His sacrifice on the cross
                demonstrated ultimate forgiveness.
              </p>
              <p className="text-sm italic text-gray-600">
                "If you forgive other people when they sin against you, your
                heavenly Father will also forgive you." - Matthew 6:14
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <svg
                className="w-12 h-12 text-amber-700 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 2v20M2 12h20"
                />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Faith
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Jesus called people to have faith in God and in Him. Through
                faith, we receive salvation and the power to overcome life's
                challenges.
              </p>
              <p className="text-sm italic text-gray-600">
                "I am the way and the truth and the life. No one comes to the
                Father except through me." - John 14:6
              </p>
            </div>
          </div>

          {/* Life Events */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-3xl font-semibold mb-8 text-center text-gray-900">
              The Life of Jesus
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-700 text-white rounded-full flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-gray-900">
                    Birth & Early Life
                  </h4>
                  <p className="text-gray-700">
                    Born in Bethlehem to the Virgin Mary, Jesus grew up in
                    Nazareth. Angels announced His birth to shepherds, and wise
                    men came from the east to worship Him.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-700 text-white rounded-full flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-gray-900">
                    Ministry
                  </h4>
                  <p className="text-gray-700">
                    At age 30, Jesus began His public ministry. He preached
                    about the Kingdom of God, performed miracles, healed the
                    sick, and gathered twelve disciples to follow Him.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-700 text-white rounded-full flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-gray-900">
                    Crucifixion
                  </h4>
                  <p className="text-gray-700">
                    Jesus was betrayed, arrested, and crucified on a cross. He
                    willingly gave His life as a sacrifice for the sins of
                    humanity, showing the depth of God's love.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-700 text-white rounded-full flex items-center justify-center font-semibold">
                  4
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-gray-900">
                    Resurrection
                  </h4>
                  <p className="text-gray-700">
                    On the third day after His death, Jesus rose from the dead,
                    conquering sin and death. He appeared to His disciples and
                    many others before ascending to heaven.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scripture Section */}
      <section id="scripture" className="py-20 px-4 relative">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1646598990880-cb5b64582f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwYmlibGUlMjBob2x5JTIwc2NyaXB0dXJlfGVufDF8fHx8MTc3MDUyMTUxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Open Bible"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
            Scripture & Verses
          </h2>

          {/* Interactive Verse Display */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl p-8 md:p-12">
            <div className="mb-6">
              <span className="inline-block px-4 py-1 bg-amber-700 text-white rounded-full text-sm mb-6">
                {bibleVerses[currentVerseIndex].category}
              </span>
            </div>

            <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed mb-8 italic">
              "{bibleVerses[currentVerseIndex].verse}"
            </p>

            <p className="text-xl text-amber-700 font-semibold mb-8">
              — {bibleVerses[currentVerseIndex].reference}
            </p>

            <div className="flex items-center justify-between">
              <button
                onClick={prevVerse}
                className="cursor-pointer flex items-center gap-2 px-6 py-3 bg-amber-700 hover:bg-amber-800 text-white rounded-lg transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Previous
              </button>

              <div className="flex gap-2">
                {bibleVerses.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentVerseIndex(index)}
                    className={`cursor-pointer w-2 h-2 rounded-full transition-all ${
                      index === currentVerseIndex
                        ? "bg-amber-700 w-8"
                        : "bg-gray-300"
                    }`}
                    aria-label={`Go to verse ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextVerse}
                className="cursor-pointer flex items-center gap-2 px-6 py-3 bg-amber-700 hover:bg-amber-800 text-white rounded-lg transition-colors"
              >
                Next
                <svg
                  className="cursor-pointer w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Popular Books of the Bible */}
          <div className="mt-12 grid md:grid-cols-4 gap-4">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg text-center">
              <svg
                className="w-8 h-8 text-amber-700 mx-auto mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <h3 className="font-semibold text-gray-900">Genesis</h3>
              <p className="text-sm text-gray-600">The Beginning</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg text-center">
              <svg
                className="w-8 h-8 text-amber-700 mx-auto mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <h3 className="font-semibold text-gray-900">Psalms</h3>
              <p className="text-sm text-gray-600">Songs of Praise</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg text-center">
              <svg
                className="w-8 h-8 text-amber-700 mx-auto mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <h3 className="font-semibold text-gray-900">John</h3>
              <p className="text-sm text-gray-600">Gospel of Love</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg text-center">
              <svg
                className="w-8 h-8 text-amber-700 mx-auto mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <h3 className="font-semibold text-gray-900">Revelation</h3>
              <p className="text-sm text-gray-600">The End Times</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prayer Section */}
      <section id="prayer" className="py-20 px-4 bg-amber-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            Prayer & Resources
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
            <div className="flex justify-center mb-6">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1575516662637-99214ea59f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmF5aW5nJTIwaGFuZHMlMjBmYWl0aHxlbnwxfHx8fDE3NzA1MjE1MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Praying hands"
                className="w-64 h-48 object-cover rounded-lg"
              />
            </div>

            <h3 className="text-3xl font-semibold mb-6 text-center text-gray-900">
              The Lord's Prayer
            </h3>
            <div className="text-lg text-gray-700 leading-relaxed space-y-4 max-w-2xl mx-auto">
              <p className="italic">
                Our Father in heaven,
                <br />
                hallowed be your name,
                <br />
                your kingdom come,
                <br />
                your will be done,
                <br />
                on earth as it is in heaven.
              </p>
              <p className="italic">
                Give us today our daily bread.
                <br />
                And forgive us our debts,
                <br />
                as we also have forgiven our debtors.
              </p>
              <p className="italic">
                And lead us not into temptation,
                <br />
                but deliver us from the evil one.
              </p>
              <p className="text-center font-semibold mt-6">— Matthew 6:9-13</p>
            </div>
          </div>

          {/* Resources Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-3 text-gray-900">
                Daily Devotionals
              </h4>
              <p className="text-gray-700 mb-4">
                Strengthen your faith with daily readings and reflections on
                God's Word.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-3 text-gray-900">
                Bible Study
              </h4>
              <p className="text-gray-700 mb-4">
                Deepen your understanding of Scripture through guided study and
                discussion.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-3 text-gray-900">
                Worship
              </h4>
              <p className="text-gray-700 mb-4">
                Connect with God through praise, worship songs, and heartfelt
                prayer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <svg
                  className="w-6 h-6 text-amber-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 2v20M2 12h20"
                  />
                </svg>
                <span className="font-semibold text-xl">The Way</span>
              </div>
              <p className="text-gray-400">
                Sharing the love of Jesus Christ and the transformative power of
                the Gospel with the world.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="cursor-pointer text-gray-400 hover:text-amber-700 transition-colors"
                  >
                    About Jesus
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("teachings")}
                    className="cursor-pointer text-gray-400 hover:text-amber-700 transition-colors"
                  >
                    Teachings
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("scripture")}
                    className="cursor-pointer text-gray-400 hover:text-amber-700 transition-colors"
                  >
                    Scripture
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("prayer")}
                    className="cursor-pointer text-gray-400 hover:text-amber-700 transition-colors"
                  >
                    Prayer
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <p className="text-gray-400 mb-4">
                Join our community and grow in your faith journey together.
              </p>
              <p className="text-sm italic text-amber-700">
                "Where two or three gather in my name, there am I with them." -
                Matthew 18:20
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2026 The Way. All rights reserved. | Made with love for the
              glory of God.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
