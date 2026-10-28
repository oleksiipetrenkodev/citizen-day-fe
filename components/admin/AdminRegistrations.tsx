"use client";

import { useMemo, useState } from "react";
import type { CatalogEvent } from "@/mock-cms/events";
import styles from "./AdminRegistrations.module.css";

type Registration = {
  id: number;
  email: string;
  status: "confirmed" | "waitlisted" | "cancelled";
  sequenceNumber: string;
  createdAt: string;
};

// Mock data: in-memory registrations (will be replaced by BE fetch)
const mockRegistrations: Registration[] = [
  {
    id: 1,
    email: "alice@example.com",
    status: "confirmed",
    sequenceNumber: "1",
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 2,
    email: "bob@example.com",
    status: "confirmed",
    sequenceNumber: "2",
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 3,
    email: "charlie@example.com",
    status: "waitlisted",
    sequenceNumber: "3",
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 4,
    email: "diana@example.com",
    status: "waitlisted",
    sequenceNumber: "4",
    createdAt: new Date().toISOString(),
  },
];

export type AdminRegistrationsProps = {
  events: CatalogEvent[];
};

export function AdminRegistrations({ events }: AdminRegistrationsProps) {
  const [selectedEventCmsId, setSelectedEventCmsId] = useState<string>(
    events[0]?.cmsId || ""
  );
  const [emailInput, setEmailInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // In a real app, this would fetch from the BE by eventId
  const registrations = useMemo(() => {
    return mockRegistrations;
  }, []);

  const selectedEvent = events.find((e) => e.cmsId === selectedEventCmsId) || events[0];
  const confirmedCount = registrations.filter(
    (r) => r.status === "confirmed"
  ).length;

  const handleCancel = (id: number) => {
    console.log(`Cancel registration ${id}`);
    // TODO: call BE DELETE /registrations/:id
  };

  const handlePromote = (id: number) => {
    console.log(`Promote registration ${id} to confirmed`);
    // TODO: call BE endpoint for auto-promotion
  };

  const handleRegisterEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim() || !selectedEvent) return;

    setIsSubmitting(true);
    try {
      console.log(
        `Register ${emailInput} to event ${selectedEvent.cmsId} (${selectedEvent.title})`
      );
      // TODO: call BE POST /registrations with { email, eventId }
      setEmailInput("");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.admin}>
      <div className={styles.controls}>
        <label htmlFor="event-select" className={styles.label}>
          Select event:
        </label>
        <select
          id="event-select"
          className={styles.select}
          value={selectedEventCmsId}
          onChange={(e) => setSelectedEventCmsId(e.target.value)}
        >
          {events.map((event) => (
            <option key={event.cmsId} value={event.cmsId}>
              {event.title}
            </option>
          ))}
        </select>
      </div>

      {selectedEvent && selectedEvent.capacity !== undefined && (
        <>
          <div className={styles.info}>
            <h2 className={styles.eventTitle}>{selectedEvent.title}</h2>
            <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.label}>Capacity:</span>
              <span className={styles.value}>{selectedEvent.capacity}</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.label}>Confirmed:</span>
              <span className={styles.value}>{confirmedCount}</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.label}>Available:</span>
              <span className={styles.value}>
                {Math.max(0, selectedEvent.capacity - confirmedCount)}
              </span>
            </div>
          </div>

          <form onSubmit={handleRegisterEmail} className={styles.registerForm}>
            <div className={styles.formRow}>
              <input
                type="email"
                placeholder="Enter email to register"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className={styles.input}
                disabled={isSubmitting}
              />
              <button
                type="submit"
                className={styles.btnRegister}
                disabled={isSubmitting || !emailInput.trim()}
              >
                {isSubmitting ? "Adding..." : "Add Registration"}
              </button>
            </div>
          </form>
        </div>
        </>
      )}

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Email</th>
              <th>Status</th>
              <th>Sequence #</th>
              <th>Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {registrations.length === 0 ? (
              <tr>
                <td colSpan={5} className={styles.emptyCell}>
                  No registrations yet
                </td>
              </tr>
            ) : (
              registrations.map((reg) => (
                <tr key={reg.id} className={styles[`status-${reg.status}`]}>
                  <td className={styles.email}>{reg.email}</td>
                  <td className={styles.status}>
                    <span className={styles[`badge-${reg.status}`]}>
                      {reg.status}
                    </span>
                  </td>
                  <td className={styles.sequence}>{reg.sequenceNumber}</td>
                  <td className={styles.date}>
                    {new Date(reg.createdAt).toLocaleDateString()}
                  </td>
                  <td className={styles.actions}>
                    {reg.status === "waitlisted" && (
                      <button
                        className={styles.btnPromote}
                        onClick={() => handlePromote(reg.id)}
                        title="Promote to confirmed"
                      >
                        ↑
                      </button>
                    )}
                    <button
                      className={styles.btnCancel}
                      onClick={() => handleCancel(reg.id)}
                      title="Cancel registration"
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
