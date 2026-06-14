import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { fetchActiveServices } from "../../src/services/api/servicesApi";
import { getServiceIcon } from "../../src/utils/serviceIcons";
import servicesFallback from "../../src/data/servicesFallback";

function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadServices() {
      try {
        setLoading(true);
        setError("");
        const response = await fetchActiveServices();
        const apiData = response.data || [];
        if (apiData.length > 0) {
          setServices(apiData);
        } else {
          setServices(servicesFallback);
        }
      } catch {
        setError("Impossible de charger les services pour le moment.");
        setServices(servicesFallback);
      } finally {
        setLoading(false);
      }
    }

    loadServices();
  }, []);

  return (
    <section className="w-full bg-gradient-to-br from-violet-100 via-sky-100 to-violet-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-50 text-sky-500 text-xs font-semibold tracking-widest uppercase mb-4">
            Nos Services
          </span>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-sky-500">Des solutions digitales</span>{" "}
            <span className="text-violet-600">modernes et performantes</span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Nous accompagnons les entreprises avec des services innovants
            pour développer leur présence digitale et accélérer leur croissance.
          </p>
        </div>

        {loading && (
          <div className="text-center text-gray-500 animate-pulse py-10">
            Chargement des services...
          </div>
        )}

        {error && (
          <div className="text-center text-red-600 bg-red-50 border border-red-200 rounded-xl py-6 px-4">
            {error}
          </div>
        )}

        {!loading && !error && services.length === 0 && (
          <div className="text-center text-gray-500 py-10">
            Aucun service disponible pour le moment.
          </div>
        )}

        {!loading && !error && services.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = getServiceIcon(service.icon);

              return (
                <div
                  key={service._id}
                  className="group relative bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-500 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-sky-500 to-violet-600 flex items-center justify-center mb-6 shadow-md">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-violet-600 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <Link
                    to={`/ServiceRequestForm?service=${encodeURIComponent(service.title)}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-500 group-hover:text-violet-600 transition-colors"
                  >
                    Demander ce service
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default Services;
