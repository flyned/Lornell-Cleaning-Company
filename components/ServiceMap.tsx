
import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const statesData = [
  { 
    name: 'Massachusetts', 
    code: 'MA', 
    fips: '25', 
    center: [42.4072, -71.3824], 
    intensity: 95,
    color: '#1e40af' // Bay State Blue
  },
  { 
    name: 'Connecticut', 
    code: 'CT', 
    fips: '09', 
    center: [41.6032, -73.0877], 
    intensity: 85,
    color: '#065f46' // Constitution Green
  },
  { 
    name: 'Rhode Island', 
    code: 'RI', 
    fips: '44', 
    center: [41.5801, -71.4774], 
    intensity: 80,
    color: '#9f1239' // Ocean Rose
  },
  { 
    name: 'New Hampshire', 
    code: 'NH', 
    fips: '33', 
    center: [43.1939, -71.5724], 
    intensity: 70,
    color: '#334155' // Granite Slate
  },
  { 
    name: 'Vermont', 
    code: 'VT', 
    fips: '50', 
    center: [44.0000, -72.7000], 
    intensity: 60,
    color: '#3f6212' // Green Mountain Lime
  },
  { 
    name: 'Maine', 
    code: 'ME', 
    fips: '23', 
    center: [45.2538, -69.4455], 
    intensity: 50,
    color: '#134e4a' // Pine Teal
  },
];

const ServiceMap: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 800;
    const height = 600;
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const projection = d3.geoMercator()
      .center([-70, 43.8])
      .scale(4200)
      .translate([width / 2, height / 2]);

    const path = d3.geoPath().projection(projection);
    const g = svg.append("g");

    d3.json("https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json")
      .then((data: any) => {
        const neNames = statesData.map(s => s.name);
        const neFeatures = data.features.filter((f: any) => neNames.includes(f.properties.name));

        g.selectAll("path")
          .data(neFeatures)
          .enter()
          .append("path")
          .attr("d", path)
          .attr("fill", (d: any) => {
            const state = statesData.find(s => s.name === d.properties.name);
            if (!state) return "#f8fafc";
            return hoveredState === d.properties.name ? state.color : `${state.color}22`;
          })
          .attr("stroke", (d: any) => {
            const state = statesData.find(s => s.name === d.properties.name);
            return hoveredState === d.properties.name ? state?.color : "#cbd5e1";
          })
          .attr("stroke-width", (d: any) => hoveredState === d.properties.name ? 2.5 : 1.5)
          .style("transition", "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)")
          .style("cursor", "pointer")
          .on("mouseenter", (event, d: any) => setHoveredState(d.properties.name))
          .on("mouseleave", () => setHoveredState(null));

        statesData.forEach((state) => {
          const coords = projection([state.center[1], state.center[0]]);
          if (!coords) return;

          const group = g.append("g")
            .attr("class", "state-group")
            .style("cursor", "pointer")
            .on("mouseenter", () => setHoveredState(state.name))
            .on("mouseleave", () => setHoveredState(null));

          group.append("circle")
            .attr("cx", coords[0])
            .attr("cy", coords[1])
            .attr("r", 15)
            .attr("fill", `${state.color}33`)
            .append("animate")
            .attr("attributeName", "r")
            .attr("from", 10)
            .attr("to", 30)
            .attr("dur", "2.5s")
            .attr("repeatCount", "indefinite");

          group.append("circle")
            .attr("cx", coords[0])
            .attr("cy", coords[1])
            .attr("r", 7)
            .attr("fill", state.color)
            .attr("stroke", "#ffffff")
            .attr("stroke-width", 2.5);

          group.append("text")
            .attr("x", coords[0])
            .attr("y", coords[1] - 18)
            .attr("text-anchor", "middle")
            .attr("font-size", "14px")
            .attr("font-weight", "900")
            .attr("fill", state.color)
            .style("text-shadow", "0px 0px 4px rgba(255,255,255,0.8)")
            .text(state.code);
        });
      })
      .catch(err => {
        console.error("Error loading map data:", err);
      });

  }, [hoveredState]);

  return (
    <div className="bg-white p-4 md:p-8 rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-slate-100 flex flex-col lg:flex-row items-stretch gap-8">
      <div className="w-full lg:w-3/5 bg-slate-50/50 rounded-[1.5rem] md:rounded-[2.5rem] p-4 md:p-6 overflow-hidden border border-slate-100 relative group min-h-[300px] md:min-h-0">
        <svg 
          ref={svgRef} 
          viewBox="0 0 800 600" 
          className="w-full h-auto drop-shadow-md"
          preserveAspectRatio="xMidYMid meet"
        />
        <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-white/80 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-xl border border-slate-200 shadow-sm pointer-events-none">
          <p className="text-[9px] md:text-[10px] font-black uppercase tracking-tighter text-slate-400 mb-0.5 md:mb-1">Current Focus</p>
          <p className="text-xs md:text-sm font-bold text-slate-700">{hoveredState || 'New England Network'}</p>
        </div>
      </div>
      
      <div className="w-full lg:w-2/5 flex flex-col justify-center space-y-6 md:space-y-8">
        <div>
          <h3 className="text-2xl font-black text-slate-900 mb-2 leading-tight">Regional Coverage</h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            Distinctive local hubs tailored to the specific regulatory and environmental requirements of each state.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
          {statesData.map((state) => (
            <div 
              key={state.code}
              className={`p-4 rounded-2xl transition-all border group cursor-pointer ${hoveredState === state.name ? 'shadow-lg ring-2 ring-offset-2' : 'bg-white border-slate-100 shadow-sm'}`}
              style={{ 
                borderColor: hoveredState === state.name ? state.color : undefined,
                backgroundColor: hoveredState === state.name ? `${state.color}05` : undefined,
                // @ts-ignore
                "--ring-color": state.color
              }}
              onMouseEnter={() => setHoveredState(state.name)}
              onMouseLeave={() => setHoveredState(null)}
            >
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: state.color }}></div>
                    <span className="font-extrabold text-slate-800 tracking-tight text-sm md:text-base">{state.name}</span>
                </div>
                <span 
                    className="text-[9px] md:text-[10px] font-black px-2 py-0.5 md:px-2.5 md:py-1 rounded-full uppercase tracking-widest text-white shadow-sm transition-transform group-hover:scale-105 shrink-0"
                    style={{ backgroundColor: state.color }}
                >
                  {state.intensity}%
                </span>
              </div>
              <div className="w-full bg-slate-100 h-1.5 md:h-2 rounded-full overflow-hidden shadow-inner">
                <div 
                  className="h-full rounded-full transition-all duration-1000 ease-out" 
                  style={{ 
                    width: `${state.intensity}%`,
                    backgroundColor: state.color,
                    boxShadow: hoveredState === state.name ? `0 0 8px ${state.color}55` : 'none'
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-[1.5rem] p-5 text-white flex items-start gap-4 shadow-xl">
          <div className="bg-indigo-500 p-2 rounded-xl shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-1">Quick Tip</p>
            <p className="text-[11px] md:text-xs font-medium text-slate-300 leading-normal">Our localized crews allow us to bypass major highway delays for consistent morning arrival times.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceMap;
