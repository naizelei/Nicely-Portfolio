"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function EditProfile() {
  const router = useRouter();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("/api/profile");
        if (!res.ok) throw new Error("Failed to fetch profile");
        const data = await res.json();
        setProfile(data);
      } catch (err) {
        setError("Could not load profile.");
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleFileUpload = async (e, field) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    setError("");
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Upload failed");
      setProfile({ ...profile, [field]: data.url });
    } catch (err) {
      setError("File upload failed.");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      const res = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(profile),
      });
      if (!res.ok) throw new Error("Failed to update profile");
      // Redirect to main page and force reload
      window.location.href = "/";
    } catch (err) {
      setError("Failed to update profile.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-500">{error}</div>;
  if (!profile) return null;

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-6">Edit Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input name="name" value={profile.name || ""} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block font-medium mb-1">Title</label>
          <input name="title" value={profile.title || ""} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block font-medium mb-1">Bio</label>
          <textarea name="bio" value={profile.bio || ""} onChange={handleChange} className="w-full border rounded px-3 py-2" rows={3} required />
        </div>
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input name="email" value={profile.email || ""} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block font-medium mb-1">Phone</label>
          <input name="phone" value={profile.phone || ""} onChange={handleChange} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block font-medium mb-1">Location</label>
          <input name="location" value={profile.location || ""} onChange={handleChange} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block font-medium mb-1">GitHub</label>
          <input name="github" value={profile.github || ""} onChange={handleChange} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block font-medium mb-1">LinkedIn</label>
          <input name="linkedin" value={profile.linkedin || ""} onChange={handleChange} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block font-medium mb-1">Twitter</label>
          <input name="twitter" value={profile.twitter || ""} onChange={handleChange} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block font-medium mb-1">Website</label>
          <input name="website" value={profile.website || ""} onChange={handleChange} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block font-medium mb-1">Avatar URL</label>
          <div className="flex items-center gap-4">
            <input name="avatar" value={profile.avatar || ""} onChange={handleChange} className="w-full border rounded px-3 py-2" />
            <input type="file" accept="image/*" onChange={e => handleFileUpload(e, "avatar")} disabled={uploading} />
          </div>
          {profile.avatar && (
            <img src={profile.avatar} alt="Avatar Preview" className="mt-2 w-24 h-24 rounded-full object-cover border" />
          )}
        </div>
        <div>
          <label className="block font-medium mb-1">Resume URL (PDF)</label>
          <div className="flex items-center gap-4">
            <input name="resume" value={profile.resume || ""} onChange={handleChange} className="w-full border rounded px-3 py-2" />
            <input type="file" accept="application/pdf" onChange={e => handleFileUpload(e, "resume")} disabled={uploading} />
          </div>
          {profile.resume && (
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="mt-2 block text-blue-600 underline">View Resume</a>
          )}
        </div>
        {error && <div className="text-red-500">{error}</div>}
        <div className="flex gap-4">
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold" disabled={saving || uploading}>
            {saving ? "Saving..." : uploading ? "Uploading..." : "Save Changes"}
          </button>
          <button type="button" className="bg-gray-200 px-6 py-2 rounded font-semibold" onClick={() => router.push("/admin/dashboard")}>Cancel</button>
        </div>
      </form>
    </div>
  );
} 