
import React, { useState } from 'react';
import { Send, Sparkles, Loader2, CheckCircle2 } from 'lucide-react';
import { getSmartCleaningAdvice } from '../services/geminiService';

const QuoteAI: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    industry: 'Corporate Office',
    sqft: 5000,
    frequency: '3 times per week',
    priority: 'Deep Disinfection'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const advice = await getSmartCleaningAdvice(formData);
    setResult(advice || null);
    setLoading(false);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <div className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-200 px-4 py-1 rounded-full text-sm font-bold mb-6">
          <Sparkles size={16} />
          <span>AI POWERED ADVISOR</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
          Get a Smart <br />Cleaning Plan <span className="text-indigo-300 italic">instantly.</span>
        </h2>
        <p className="text-indigo-100 text-lg mb-8 max-w-md">
          Our AI analyzes your facility type and usage patterns to suggest the optimal cleaning scope and frequency for your New England business.
        </p>
        
        <div className="space-y-4">
          {['Instant Scope Generation', 'Regional Climate Adjustments', 'Customizable Checklist'].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="bg-indigo-500 rounded-full p-1">
                <CheckCircle2 size={16} />
              </div>
              <span className="font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white text-slate-900 rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative">
        {!result ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Facility Type</label>
                <select 
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 focus:border-indigo-500 outline-none"
                  value={formData.industry}
                  onChange={e => setFormData({...formData, industry: e.target.value})}
                >
                  <option>Corporate Office</option>
                  <option>Medical/Clinical</option>
                  <option>Retail/Showroom</option>
                  <option>Warehouse/Industrial</option>
                  <option>Restaurant/F&B</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Approx. SQ FT</label>
                <input 
                  type="number" 
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 focus:border-indigo-500 outline-none"
                  placeholder="e.g. 5000"
                  value={formData.sqft}
                  onChange={e => setFormData({...formData, sqft: parseInt(e.target.value)})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Desired Frequency</label>
              <div className="grid grid-cols-3 gap-2">
                {['Daily', '3x Week', 'Weekly'].map(freq => (
                  <button
                    key={freq}
                    type="button"
                    onClick={() => setFormData({...formData, frequency: freq})}
                    className={`py-3 rounded-xl font-semibold border-2 transition-all ${formData.frequency === freq ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg' : 'bg-white border-slate-100 text-slate-600 hover:border-slate-200'}`}
                  >
                    {freq}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Main Priority</label>
              <select 
                className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 focus:border-indigo-500 outline-none"
                value={formData.priority}
                onChange={e => setFormData({...formData, priority: e.target.value})}
              >
                <option>Deep Disinfection</option>
                <option>Floor Care/Polishing</option>
                <option>Eco-Friendly/Green Cleaning</option>
                <option>Budget Optimization</option>
              </select>
            </div>

            <button 
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-indigo-700 transition-all disabled:opacity-70 shadow-xl shadow-indigo-100"
            >
              {loading ? <Loader2 className="animate-spin" /> : <Send size={20} />}
              {loading ? 'Consulting Advisor...' : 'Generate My Custom Plan'}
            </button>
          </form>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="bg-indigo-50 p-6 rounded-2xl mb-6">
                <div className="flex items-center gap-3 text-indigo-700 mb-4">
                  <Sparkles size={24} />
                  <h4 className="text-xl font-bold">Lornell AI Recommendations</h4>
                </div>
                <div className="prose prose-slate text-slate-700 leading-relaxed whitespace-pre-line">
                  {result}
                </div>
             </div>
             <div className="flex gap-4">
               <button 
                onClick={() => setResult(null)}
                className="flex-1 border-2 border-slate-200 text-slate-600 py-3 rounded-xl font-bold hover:bg-slate-50"
               >
                 Back
               </button>
               <button 
                className="flex-1 bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-200"
               >
                 Get Full Quote
               </button>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuoteAI;
