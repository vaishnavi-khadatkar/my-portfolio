export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-br from-[#0f172a] via-[#3b0764] to-[#020617]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-pink-400 mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* 1. Campus Event Management */}
          <div className="glass-card">
            <h3 className="text-2xl font-semibold text-white mb-3">
              Campus Event Management System
            </h3>
            <p className="text-gray-300 mb-4">
              Developed a Java-based web application to manage college events.
              Users can view events, while admins can add, update, and delete
              event details using MVC architecture.
            </p>
            <p className="text-sm text-pink-300">
              Java · JSP · Servlets · JDBC · MySQL · MVC
            </p>
          </div>

          {/* 2. Residential Remodeling Website */}
          <div className="glass-card">
            <h3 className="text-2xl font-semibold text-white mb-3">
              Residential Remodeling Website
            </h3>
            <p className="text-gray-300 mb-4">
              Designed and developed a modern frontend website for a residential
              remodeling service with sections like Services, Portfolio,
              Testimonials, and Contact.
            </p>
            <p className="text-sm text-pink-300">
              HTML · CSS · JavaScript · UI Design
            </p>
          </div>

          {/* 3. Educational Website */}
          <div className="glass-card">
            <h3 className="text-2xl font-semibold text-white mb-3">
              Educational Website
            </h3>
            <p className="text-gray-300 mb-4">
              Built a responsive preschool website showcasing programs,
              admissions, gallery, and contact information with clean UI.
            </p>
            <p className="text-sm text-pink-300">
              HTML · CSS · JavaScript · Responsive Design
            </p>
          </div>

          {/* 4. Computer User Interaction */}
          <div className="glass-card">
            <h3 className="text-2xl font-semibold text-white mb-3">
              Computer User Interaction using Hand Gesture & Voice Assistant
            </h3>
            <p className="text-gray-300 mb-4">
              Developed an intelligent interface to control computer operations
              using real-time hand gestures and voice commands. Implemented
              gesture recognition using OpenCV and voice interaction using
              speech processing libraries.
            </p>
            <p className="text-sm text-pink-300">
              Python · OpenCV · SpeechRecognition · pyttsx3
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
