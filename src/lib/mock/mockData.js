import { type } from "@testing-library/user-event/dist/type";

export const sidebarData = [
  {
    text: "Home",
  },
  {
    text: "Physical Assessments",
    subItems: [
      {
        text: "Visit Summary and Plan",
      },
      {
        text: "Care coordination",
      },
      {
        text: "patient identifier",
      },
    ],
  },
  {
    text: "Goals and Interventions",
    subItems: [
      {
        text: "Care coordination",
      },
      {
        text: "patient identifier",
      },
    ],
  },
  {
    text: "Mileage",
    subItems: [
      {
        text: "Care coordination",
      },
      {
        text: "patient identifier",
      },
    ],
  },
  {
    text: "Plan Of Care",
    subItems: [
      {
        text: "Care coordination",
      },
      {
        text: "patient identifier",
      },
    ],
  },
];

export const questionData = [
  {
    id: 1,
    question:
      "SUMMARIZE THE EVENTS LEADING TO THE PATIENT'S REFERRAL TO HOME HEALTH AS IDENTIFIED ON THE CLINICAL COMMENT INTAKE NOTE:",
    type: "text",
  },
  {
    id: 2,
    question: "ARE FUTURE SKILLED NURSING VISITS PLANNED?",
    type: "radio",
  },
  {
    id: 3,
    question:
      "NAME OF PROVIDER CONTACTED TO OBTAIN APPROVAL OF HOME HEALTH PLAN OF CARE AND CONFIRMATION TO SIGN ORDERS:",
    type: "text",
  },
  {
    id:4,  
    question: "SELECT REASON WHY THERE IS NOT A SKILLED NEED FOR NURSING CARE:",
    type: "multiselect",
    values: [
      "PATIENT/CAREGIVER HAS DEMONSTRATED INDEPENDENCE TO SELF-MANAGE CONDITION. PHYSICIAN NOTIFIED THAT FURTHER SKILLED NURSING VISITS ARE NOT INDICATED.",
      "PATIENT/CAREGIVER REFUSES FURTHER VISITS",
      "PATIENT IS TRANSITIONING TO HOSPICE CARE",
      "OTHER",
    ],
  },
];
