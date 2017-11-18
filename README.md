# GI-Angle
Application of Geoinformatics technology for Mapping Air Pollution

2.  Objectives
2.1 To visualize air pollution level
2.2 To analyze the risk area that could affect public health
3. Used tools and data
3.1 Software
       3.1.1 QGIS Desktop 2.18
       3.1.2 SQLyog Community
       3.1.3 PostGIS, PostgREST
       3.1.4 Google Earth Pro
3.2 Data
       3.2.1 Dust particles (pm2_5value, pm10_value)
       3.2.2 Coorinates (latitude and longitude)
       3.2.3 Date and time (timestamp)
       3.2.4 Houses/parcel map (Google Earth Pro)
4. Methodology
4.1 Create houses/parcel map using Google Earth Pro.
4.2 Import data into PostGIS database management software.
4.3 Visualize air pollution levels in QGIS software
4.4 Analyze air pollution using spatial operations, such as union and intersection.
4.5 Intersect the result with the parcel map to find the risk areas.
