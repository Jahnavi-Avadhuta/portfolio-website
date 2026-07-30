import { useState } from "react";
import Container from "../../common/Container";
import SectionHeading from "../../common/SectionHeading";
import CertificateCard from "./CertificateCard";
import CertificateFilters from "./CertificateFilters";
import CertificateSearch from "./CertificateSearch";
import { certificates } from "../../../data";

const Certificates = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Featured",
    "NPTEL",
    "Infosys",
    "Internship",
    "Professional",
    "Assessment",
    "Project",
  ];

  const filtered = certificates.filter((certificate) => {
    const matchesCategory =
      category === "All"
        ? true
        : category === "Featured"
        ? certificate.featured
        : certificate.category === category;

    const matchesSearch = certificate.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="certificates"
      className="py-24"
    >
      <Container>
        <SectionHeading
          title="Certificates"
          subtitle="Professional certifications, internships and achievements."
        />

        {/* Summary Card */}
        <div className="mx-auto mt-10 max-w-5xl rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 p-6 shadow-md">
          <div className="grid gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-3xl font-bold text-blue-600">15+</h3>
              <p className="text-sm text-gray-600">Certificates</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">7</h3>
              <p className="text-sm text-gray-600">NPTEL Courses</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">5</h3>
              <p className="text-sm text-gray-600">
                Elite / Elite + Silver
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">2</h3>
              <p className="text-sm text-gray-600">
                Internship / Professional
              </p>
            </div>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="mt-10 space-y-6">
          <CertificateSearch
            value={search}
            onChange={setSearch}
          />

          <CertificateFilters
            categories={categories}
            selected={category}
            onSelect={setCategory}
          />
        </div>

        {/* Certificate Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((certificate) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Certificates;