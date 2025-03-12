---
title: "HDB Transport Infrastructure Review"
hero: "~/assets/heros/hdb_unsplash.jpg"
heroAlt: "HDB Transport Infrastructure Review Hero Image"
description: "A review of public transport infrastructure in HDB towns, assessing disparities and recommending improvements."
pubDate: 2024-07-15
updatedDate: 2024-07-23
tags: ["data visualization", "API", "python", "data science"]
techStack: ["Python", "Seaborn", "Matplotlib"]
draft: false
archive: false
---

## Understanding Transport Disparities in HDB Towns

I was always passionate about the transport system. When I was young, I was so mesmerized by all the sketches of the future transportation system in Singapore - though it didn't occur to me that Singapore might sink if we were to do that.

One fine day, I was taking the MRT to meet my friends (or something). I was curious.

Are there HDB towns that are significantly underserved by public transport?

#### **📌 The Research Questions**

- Which areas have **insufficient transport infrastructure** compared to population density?
- How do **bus stops and MRT stations** align with **demand**?
- Are there **specific MRT phases** that should be accelerated?

#### **🔍 Interactive Overview: Public Transport Infrastructure**

Explore the **overall transport density** across Singapore in the interactive map below:

<iframe src="/projects/hdb_transport_infrastructure_review/singaporePT.html" width="100%" height="500px"></iframe>

---

## **🚌 Analyzing Bus Stop Density**

Bus stop distribution is **not uniform**, with some towns experiencing **notable shortages**.

#### **🚦 Key Findings**

- Areas with **significant bus stop shortages**:
  1. **River Valley**
  2. **Punggol**
  3. **Sengkang**
  4. **Choa Chu Kang**
  5. **Newton**

#### **📍 Interactive Map: Bus Stop Density Discrepancies**

The heatmap below visualizes **bus stop coverage gaps**:

<iframe src="/projects/hdb_transport_infrastructure_review/bus_density_map.html" width="100%" height="500px"></iframe>

---

## **🚇 MRT Station Density – Are Some Areas Underserved?**

While the MRT network is extensive, **certain HDB towns have significantly fewer train stations** than needed.

#### **🚉 Top Areas with Train Stop Shortages**

1. **Choa Chu Kang**
2. **Sengkang**
3. **Toa Payoh**
4. **Hougang**
5. **Woodlands**

#### **📊 Interactive Map: Train Stop Density Discrepancies**

Explore which areas require **more MRT stations**:

<iframe src="/projects/hdb_transport_infrastructure_review/train_density_map.html" width="100%" height="500px"></iframe>

---

## **🌍 Combined Transport Density Analysis**

To assess the overall public transport accessibility, I calculated a **transport density discrepancy score**, which considers both **bus stops and MRT stations**.

#### **📊 Interactive Map: Overall Public Transport Gaps**

The following heatmap highlights areas with the **largest transport accessibility issues**:

<iframe src="/projects/hdb_transport_infrastructure_review/total_density_map.html" width="100%" height="500px"></iframe>

---

## **🏗️ Future Transport Planning – What Should Be Prioritized?**

Based on the findings, the following **MRT phases** should be prioritized for acceleration:

#### **🚆 Recommended MRT Expansions**

- **Jurong Region Line (JRL) Phase 1 (2027)**
- **Cross Island Line (CRL) Phase 1 (2030)**
- **CRL Punggol Extension (2032)**

![Upcoming MRT Projects by LTA](../../assets/projects/hdb_transport_infrastructure_review_1.jpg "Announced MRT Projects by LTA as of 2025")

---

## **🔮 Key Takeaways & Future Directions**

#### **📌 Final Thoughts**

- Public transport infrastructure **varies significantly** across HDB towns.
- Certain MRT phases **should be accelerated** to address high-demand areas.
- **Interactive maps help visualize transport gaps effectively.**

#### **🔬 Next Steps**

- Analyze **weekend vs. weekday transport accessibility**.
- Study **first-mile/last-mile connectivity issues**.
- Expand this study to **commercial and industrial zones**.
