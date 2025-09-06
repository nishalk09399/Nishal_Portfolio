
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <motion.h1 className="text-5xl font-bold mb-4" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>Hi, I'm Nishal</motion.h1>
        <p className="text-xl max-w-2xl mb-6">DevOps & Cloud Engineer | CI/CD | AWS | Kubernetes | Terraform</p>
        <div className="flex gap-4">
          <a href="https://github.com/" target="_blank"><Github className="w-6 h-6"/></a>
          <a href="https://www.linkedin.com/in/nishalk939/" target="_blank"><Linkedin className="w-6 h-6"/></a>
          <a href="mailto:nishalk9399@gmail.com"><Mail className="w-6 h-6"/></a>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <p className="text-lg text-center max-w-3xl mx-auto">
          Goal-oriented DevOps and Cloud Engineer with 3.9 years of experience specializing in CI/CD pipelines, infrastructure automation, and cloud deployments. Skilled in Jenkins, Nexus, Ansible, Terraform, Docker, Kubernetes, AWS, and DevSecOps tools.
        </p>
      </section>

      <section className="bg-gray-100 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Core Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-6">
          {["Jenkins","Terraform","Ansible","Docker","Kubernetes","AWS","SonarQube","Grafana","GitLab"].map((skill, i) => (
            <div key={i} className="shadow-md text-center rounded-xl bg-white p-4 font-semibold">{skill}</div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
        <div className="space-y-6">
          <div className="shadow-lg bg-white rounded-xl p-6">
            <h3 className="text-xl font-bold">SRE & DevOps Engineer - Infosys</h3>
            <p className="text-sm text-gray-600">Apr 2025 – Present | Client: Nuskin</p>
            <ul className="list-disc ml-6 mt-2 text-gray-700">
              <li>Developed complex CI/CD pipelines improving deployment efficiency by 40%.</li>
              <li>Automated server provisioning & CDN (Fastly) services using Terraform & Ansible.</li>
              <li>Implemented AWS infrastructure with EC2, EKS, RDS, and Load Balancers.</li>
            </ul>
          </div>
          <div className="shadow-lg bg-white rounded-xl p-6">
            <h3 className="text-xl font-bold">DevOps Engineer - Tech Mahindra</h3>
            <p className="text-sm text-gray-600">Dec 2021 – Apr 2025 | Client: CelcomDigi</p>
            <ul className="list-disc ml-6 mt-2 text-gray-700">
              <li>Managed CI/CD tools (Jenkins, Nexus, Ansible) and resolved pipeline issues.</li>
              <li>Implemented containerized deployments using Docker & Kubernetes with Helm.</li>
              <li>Integrated SonarQube & JUnit improving build reliability to 95%.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Certifications</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {["AWS Certified Solutions Architect - Associate","AWS Cloud Practitioner","Azure Fundamentals AZ-900"].map((cert, i) => (
            <div key={i} className="shadow-md bg-white rounded-xl p-4 font-semibold text-center">{cert}</div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-6">I'm open to collaborations, freelance work, or full-time opportunities.</p>
        <a className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700" href="mailto:nishalk9399@gmail.com">Say Hello</a>
      </section>
    </div>
  );
}
