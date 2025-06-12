import { Button } from "@/components/ui/button-scn";
import { Card } from "@/components/ui/card";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO & Founder",
    description:
      "Sarah brings over 15 years of experience in technology and business development. She founded our company with a vision to revolutionize how teams collaborate and innovate. Her leadership style focuses on empowering individuals to reach their full potential while driving sustainable growth.",
    image: "logo.png",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    description:
      "Michael is a technology visionary with expertise in scalable systems and innovative solutions. He leads our engineering team with a focus on cutting-edge development practices and emerging technologies. His passion for clean code and system architecture drives our technical excellence.",
    image: "logo.png",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Head of Design",
    description:
      "Emily crafts beautiful and intuitive user experiences that delight our customers. With a background in psychology and design, she understands how to create interfaces that are both aesthetically pleasing and functionally superior. Her work has been recognized with multiple design awards.",
    image: "logo.png",
  },
  {
    id: 4,
    name: "David Park",
    role: "VP of Operations",
    description:
      "David ensures our operations run smoothly and efficiently. His analytical mindset and process optimization skills have helped us scale rapidly while maintaining quality. He believes in data-driven decisions and continuous improvement across all aspects of our business.",
    image: "logo.png",
  },
];

const MeetTeam = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-yellow-50 to-yellow-100">
      {/* Header */}
      {/* <div className="border-b border-yellow-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-20 px-4 py-6">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent mb-4">
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            We're a passionate group of innovators, creators, and
            problem-solvers dedicated to building exceptional experiences and
            driving meaningful change.
          </p>
        </div>
      </div> */}

      {/* Team Members */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent mb-4">
          Meet Our Team
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mb-15">
          We're a passionate group of innovators, creators, and problem-solvers
          dedicated to building exceptional experiences and driving meaningful
          change.
        </p>
        <div className="space-y-24">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="opacity-0 translate-y-5 animate-[fadeInUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Card className="p-8 md:p-12 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl shadow-lg bg-white/95 backdrop-blur-sm border border-yellow-200">
                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center gap-8 md:gap-12`}
                >
                  {/* Image */}
                  <div className="flex-shrink-0">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/20 to-yellow-300/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110"></div>
                      <img
                        src={member.image}
                        alt={member.name}
                        className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl ring-2 ring-yellow-200 group-hover:ring-yellow-400"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-yellow-500/10 via-transparent to-yellow-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                      {member.name}
                    </h2>
                    <div className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-200/60 to-yellow-300/60 text-yellow-800 border border-yellow-300 rounded-full text-lg font-medium mb-6 hover:from-yellow-300/70 hover:to-yellow-400/70 transition-all duration-300">
                      {member.role}
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      {/* <div className="bg-gradient-to-r from-yellow-100/60 via-yellow-200/50 to-yellow-300/60 border-t border-yellow-200">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent mb-4">
            Join Our Journey
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion
            for innovation and excellence.
          </p>
          <Button
            size="lg"
            className="text-lg px-8 py-6 transition-all duration-300 ease-out hover:scale-105 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white shadow-lg hover:shadow-xl"
          >
            View Open Positions
          </Button>
        </div>
      </div> */}

      {/* <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style> */}
    </div>
  );
};

export default MeetTeam;
