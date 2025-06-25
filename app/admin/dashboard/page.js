"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { 
  User, 
  Code, 
  FolderOpen, 
  Plus,
  Edit,
  Trash2,
  Eye
} from "lucide-react";

function AdminDashboard() {
  const [profile, setProfile] = useState(null);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") || "profile";
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [profileRes, skillsRes, projectsRes] = await Promise.all([
        fetch("/api/profile"),
        fetch("/api/skills"),
        fetch("/api/projects"),
      ]);

      const profileData = await profileRes.json();
      const skillsData = await skillsRes.json();
      const projectsData = await projectsRes.json();

      setProfile(profileData);
      setSkills(skillsData);
      setProjects(projectsData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    router.push(`/admin/dashboard?tab=${tab}`, { scroll: false });
  };

  const handleDelete = async (type, id) => {
    if (!confirm(`Are you sure you want to delete this ${type}?`)) return;

    try {
      const response = await fetch(`/api/${type}/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        fetchData(); // Refresh data
      }
    } catch (error) {
      console.error(`Error deleting ${type}:`, error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Navigation Tabs */}
      <div className="flex space-x-1 bg-white dark:bg-gray-800 rounded-lg p-1 shadow-sm mb-8 text-xl">
        <button
          onClick={() => handleTabClick("profile")}
          className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-colors cursor-pointer ${
            activeTab === "profile"
              ? "bg-blue-600 text-white"
              : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          }`}
        >
          <User className="w-5 h-5" />
          <span>Profile</span>
        </button>
        <button
          onClick={() => handleTabClick("skills")}
          className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-colors cursor-pointer ${
            activeTab === "skills"
              ? "bg-blue-600 text-white"
              : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          }`}
        >
          <Code className="w-5 h-5" />
          <span>Skills</span>
        </button>
        <button
          onClick={() => handleTabClick("projects")}
          className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-colors cursor-pointer ${
            activeTab === "projects"
              ? "bg-blue-600 text-white"
              : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          }`}
        >
          <FolderOpen className="w-5 h-5" />
          <span>Projects</span>
        </button>
      </div>

      {/* Content */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
        {activeTab === "profile" && (
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">
                Profile Information
              </h2>
              <button
                onClick={() => router.push("/admin/profile/edit")}
                className="flex lg:text-lg items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white cursor-pointer px-4 py-2 rounded-lg transition-colors"
              >
                <Edit className="w-4 h-4" />
                <span>Edit Profile</span>
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg lg:text-2xl font-medium text-gray-900 dark:text-white mb-4">
                  Basic Information
                </h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm lg:text-lg  text-gray-500 dark:text-gray-400">Name:</span>
                    <p className="text-gray-900 dark:text-white">{profile?.name}</p>
                  </div>
                  <div>
                    <span className="text-sm lg:text-lg  text-gray-500 dark:text-gray-400">Title:</span>
                    <p className="text-gray-900 dark:text-white">{profile?.title}</p>
                  </div>
                  <div>
                    <span className="text-sm lg:text-lg  text-gray-500 dark:text-gray-400">Email:</span>
                    <p className="text-gray-900 dark:text-white">{profile?.email}</p>
                  </div>
                  <div>
                    <span className="text-sm lg:text-lg  text-gray-500 dark:text-gray-400">Phone:</span>
                    <p className="text-gray-900 dark:text-white">{profile?.phone || "Not set"}</p>
                  </div>
                  <div>
                    <span className="text-sm lg:text-lg  text-gray-500 dark:text-gray-400">Location:</span>
                    <p className="text-gray-900 dark:text-white">{profile?.location || "Not set"}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Social Links
                </h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">GitHub:</span>
                    <p className="text-gray-900 dark:text-white">{profile?.github || "Not set"}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">LinkedIn:</span>
                    <p className="text-gray-900 dark:text-white">{profile?.linkedin || "Not set"}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Twitter:</span>
                    <p className="text-gray-900 dark:text-white">{profile?.twitter || "Not set"}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Website:</span>
                    <p className="text-gray-900 dark:text-white">{profile?.website || "Not set"}</p>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        )}

        {activeTab === "skills" && (
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Skills Management
              </h2>
              <button
                onClick={() => router.push("/admin/skills/add")}
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Add Skill</span>
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill._id}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {skill.name}
                    </h3>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => router.push(`/admin/skills/edit/${skill._id}`)}
                        className="text-blue-600 hover:text-blue-700"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete("skills", skill._id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500 dark:text-gray-400">Category:</span>
                      <span className="text-gray-900 dark:text-white capitalize">{skill.category}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500 dark:text-gray-400">Proficiency:</span>
                      <span className="text-gray-900 dark:text-white">{skill.proficiency}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {skills.length === 0 && (
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                No skills added yet. Add your first skill!
              </div>
            )}
          </div>
        )}

        {activeTab === "projects" && (
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Projects Management
              </h2>
              <button
                onClick={() => router.push("/admin/projects/add")}
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Add Project</span>
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div
                  key={project._id}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                >
                  <div className="h-48 bg-gray-100 dark:bg-gray-700 relative">
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                    {project.featured && (
                      <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-xs">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => router.push(`/admin/projects/edit/${project._id}`)}
                          className="text-blue-600 hover:text-blue-700"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete("projects", project._id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                      {project.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies?.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies?.length > 3 && (
                        <span className="text-xs text-gray-500">+{project.technologies.length - 3} more</span>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 text-sm"
                        >
                          <Eye className="w-4 h-4 inline mr-1" />
                          Live
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 text-sm"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {projects.length === 0 && (
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                No projects added yet. Add your first project!
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function AdminDashboardPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div></div>}>
      <AdminDashboard />
    </Suspense>
  );
} 