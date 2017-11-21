# GI - Angel

## Application of Geoinformatics technology for Mapping Air Pollution

## Introduction
Atmospheric dust with different sizes ranging from 0.0002 microns to 500 microns in size.
The dust is separated into two major categories. Natural Particle AndMan-made Particle.
By dust; if it is too much to make an impact on human health, such as asthma, emphysema or bronchitis.
The size of the dust that is harmful to humans, it is located at 101 micron to 500 micron, so my team do have the data analyzed for the risk of dust particles affect humans. You can put that information to use in planning to minimize the impact will arise from the dust.


## Objectives
* To visualize air pollution level
* To analyze the risk area that could affect public health


## Tools and data
1. Software
- QGIS Desktop 2.18
- SQLyog Community
- PostGIS, PostgREST
- Google Earth Pro
2. Data
- Dust particles (pm2_5value, pm10_value)
- Coorinates (latitude and longitude)
- Date and time (timestamp)
- Houses/parcel map (Google Earth Pro)


## Methology
* Create houses/parcel map using Google Earth Pro.
* Import data into PostGIS database management software.
* Visualize air pollution levels in QGIS software
* Analyze air pollution using spatial operations, such as union and intersection.
* Intersect the result with the parcel map to find the risk areas.

## Thank you sponsors
* We would like to thank everyone from KISTI for thier supports during this workshop in Korea
* We, also, would like to thank the President of RBRU and the ex-dean of CSIT for thier additional supports
