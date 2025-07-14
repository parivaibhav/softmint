import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                About{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                 SoftMint
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Learn more about our mission, values, and the team behind this
                innovative platform.
              </p>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-50 -z-10"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-purple-100 rounded-full opacity-50 -z-10"></div>
        </section>

        {/* About Content */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Image */}
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1646215993421-5151435c78dc?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGl0JTIwY29tcGFueSUyMG9mZmljZXxlbnwwfHwwfHx8Mg%3D%3D"
                    alt="Our Office"
                    width={400}
                    height={400}
                    className="rounded-2xl object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Right Column - Content */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  NextApp was born from a vision to create web applications that
                  are not only powerful and efficient but also beautiful and
                  user-friendly. We believe that technology should enhance human
                  experience, not complicate it.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Founded in 2024, our team of passionate developers and designers
                  work together to build applications that leverage the latest
                  technologies while maintaining simplicity and accessibility.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-2">
                      50+
                    </div>
                    <div className="text-gray-600">Projects Completed</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-2">
                      100%
                    </div>
                    <div className="text-gray-600">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Mission & Values
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We're driven by core values that shape everything we do.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Innovation
                </h3>
                <p className="text-gray-600">
                  Constantly pushing boundaries and exploring new technologies to
                  deliver cutting-edge solutions.
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-purple-600"
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
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Quality
                </h3>
                <p className="text-gray-600">
                  Delivering excellence in every line of code, every design
                  element, and every user interaction.
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Collaboration
                </h3>
                <p className="text-gray-600">
                  Working together with clients and team members to achieve shared
                  goals and create meaningful solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The talented individuals who make NextApp possible.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image
                    src="https://randomuser.me/api/portraits/men/34.jpg"
                    alt="Jane Smith"
                    width={128}
                    height={128}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  John Doe
                </h3>
                <p className="text-blue-600 font-medium mb-2">Founder & CEO</p>
                <p className="text-gray-600">
                  Visionary leader with 10+ years of experience in web
                  development.
                </p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image
                    src="https://randomuser.me/api/portraits/men/34.jpg"
                    alt="Jane Smith"
                    width={128}
                    height={128}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Jane Smith
                </h3>
                <p className="text-purple-600 font-medium mb-2">Lead Designer</p>
                <p className="text-gray-600">
                  Creative designer passionate about user experience and beautiful
                  interfaces.
                </p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image
                    src="https://randomuser.me/api/portraits/men/34.jpg"
                    alt="Jane Smith"
                    width={128}
                    height={128}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Mike Johnson
                </h3>
                <p className="text-green-600 font-medium mb-2">
                  Senior Developer
                </p>
                <p className="text-gray-600">
                  Full-stack developer with expertise in React, Next.js, and
                  modern web technologies.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
