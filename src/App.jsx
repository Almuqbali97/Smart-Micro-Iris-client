// import React, { useState } from 'react';
// import { Droplets, Sun, Eye, User, Sparkles, TrendingUp, CheckCircle2, AlertCircle, RefreshCw, Activity, Beaker, Shield, Leaf } from 'lucide-react';

// const App = () => {
//   const [formData, setFormData] = useState({
//     age: '25',
//     melanin: '0.5',
//     light: 'medium',
//     sensitivity: 'moderate'
//   });

//   const [loading, setLoading] = useState(false);
//   const [result, setResult] = useState(null);
//   const [error, setError] = useState(null);

//   const lightLevels = [
//     { value: 'low', label: 'Low', icon: '🌙' },
//     { value: 'medium', label: 'Medium', icon: '☁️' },
//     { value: 'high', label: 'High', icon: '☀️' }
//   ];

//   const sensitivityLevels = [
//     { value: 'low', label: 'Low', color: 'from-green-400 to-emerald-500' },
//     { value: 'moderate', label: 'Moderate', color: 'from-yellow-400 to-orange-500' },
//     { value: 'severe', label: 'Severe', color: 'from-red-400 to-pink-500' }
//   ];

//   const handleInputChange = (name, value) => {
//     setFormData(prev => ({ ...prev, [name]: value }));
//     setError(null);
//   };

//   const handleAnalyze = async () => {
//     if (!formData.age || !formData.melanin) {
//       setError('Please fill in age and melanin level');
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/analyze`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           age: parseFloat(formData.age),
//           melanin: parseFloat(formData.melanin),
//           light: formData.light,
//           sensitivity: formData.sensitivity
//         })
//       });

//       const data = await response.json();

//       if (data.ok) {
//         setResult(data);
//       } else {
//         setError(data.error || 'Analysis failed');
//       }
//     } catch (err) {
//       setError('Failed to connect to analysis server. Please ensure the backend is running.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleReset = () => {
//     setFormData({
//       age: '',
//       melanin: '',
//       light: 'medium',
//       sensitivity: 'moderate'
//     });
//     setResult(null);
//     setError(null);
//   };

//   const getIrritationColor = (risk) => {
//     if (risk === 'Low') return 'text-green-600 bg-green-100';
//     if (risk === 'Moderate') return 'text-yellow-600 bg-yellow-100';
//     return 'text-red-600 bg-red-100';
//   };

//   if (result) {
//     const { aiResult, confidence, nearestSamples } = result;

//     return (
//       <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 p-6 relative overflow-hidden">
//         {/* Animated Background Orbs */}
//         <div className="fixed inset-0 overflow-hidden pointer-events-none">
//           <div className="absolute top-0 -left-4 w-96 h-96 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
//           <div className="absolute top-0 -right-4 w-96 h-96 bg-gradient-to-br from-green-400 to-lime-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
//           <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
//           <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-lime-400 to-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-6000"></div>
//         </div>

//         <div className="max-w-7xl mx-auto relative z-10">
//           {/* Header */}
//           <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 animate-fadeIn">
//             <div className="flex items-center gap-3">
//               <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg animate-pulse-slow">
//                 <Leaf className="w-7 h-7 text-white" />
//               </div>
//               <div>
//                 <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Micral-Iris Membrane Analysis</h1>
//                 <p className="text-xs sm:text-sm text-gray-600">Photophobia Reduction for Albinism</p>
//               </div>
//             </div>
//             <button
//               onClick={() => setResult(null)}
//               className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl hover:border-emerald-500 hover:bg-emerald-50 hover:shadow-lg transition-all duration-300 font-semibold text-gray-700 shadow-sm transform hover:scale-105 text-sm sm:text-base w-full sm:w-auto justify-center"
//             >
//               <RefreshCw className="w-4 h-4" />
//               New Analysis
//             </button>
//           </div>

//           {/* Confidence Banner */}
//           <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-emerald-100 p-4 sm:p-6 mb-6 animate-fadeIn animation-delay-200 hover:shadow-2xl transition-all duration-300">
//             <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//               <div className="flex items-center gap-3 sm:gap-4">
//                 <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shadow-lg animate-pulse-slow flex-shrink-0">
//                   <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
//                 </div>
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Membrane Design Complete</h2>
//                   <p className="text-xs sm:text-sm text-gray-600">Personalized micro-iris membrane formulation</p>
//                 </div>
//               </div>
//               <div className="text-left sm:text-right w-full sm:w-auto">
//                 <div className="text-3xl sm:text-4xl font-bold text-gray-900">{confidence.toFixed(2)}%</div>
//                 <div className="text-xs sm:text-sm font-semibold text-emerald-600">
//                   {confidence >= 90 ? 'Excellent' : confidence >= 70 ? 'High' : 'Moderate'} Confidence
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
//             {/* Left Column - Design & Performance */}
//             <div className="lg:col-span-2 space-y-6">
//               {/* Optimal Mixture Design */}
//               <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-emerald-100 p-4 sm:p-6 animate-fadeIn animation-delay-400 hover:shadow-2xl hover:scale-[1.01] transition-all duration-300">
//                 <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
//                   <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center shadow-lg animate-pulse-slow flex-shrink-0">
//                     <Beaker className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
//                   </div>
//                   <h3 className="text-lg sm:text-xl font-bold text-gray-900">Optimal Mixture Design</h3>
//                 </div>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
//                   <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-3 sm:p-4 border border-emerald-200 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
//                     <p className="text-xs font-semibold text-gray-600 mb-1">CeO₂ (Cerium Oxide)</p>
//                     <p className="text-base sm:text-lg font-bold text-gray-900">{aiResult.design.CeO2_g.toFixed(2)} g</p>
//                   </div>
//                   <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-3 sm:p-4 border border-emerald-200 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
//                     <p className="text-xs font-semibold text-gray-600 mb-1">Sb₂S₃ (Antimony Sulfide)</p>
//                     <p className="text-base sm:text-lg font-bold text-gray-900">{aiResult.design.Sb2S3_g.toFixed(2)} g</p>
//                   </div>
//                   <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-3 sm:p-4 border border-emerald-200 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
//                     <p className="text-xs font-semibold text-gray-600 mb-1">Ozone Water</p>
//                     <p className="text-base sm:text-lg font-bold text-gray-900">{aiResult.design.ozoneWater_ml.toFixed(1)} ml</p>
//                   </div>
//                   <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-3 sm:p-4 border border-emerald-200 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
//                     <p className="text-xs font-semibold text-gray-600 mb-1">Mushroom Extract</p>
//                     <p className="text-base sm:text-lg font-bold text-gray-900">{aiResult.design.mushroomExtract_ml.toFixed(1)} ml</p>
//                   </div>
//                   <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-3 sm:p-4 border border-emerald-200 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer sm:col-span-2">
//                     <p className="text-xs font-semibold text-gray-600 mb-1">Tannic Acid</p>
//                     <p className="text-base sm:text-lg font-bold text-gray-900">{aiResult.design.tannicAcid_ml.toFixed(2)} ml</p>
//                   </div>
//                 </div>
//               </div>



//               {/* AI Analysis */}
//               <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-teal-100 p-4 sm:p-6 animate-fadeIn animation-delay-800 hover:shadow-2xl hover:scale-[1.01] transition-all duration-300">
//                 <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
//                   <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center shadow-lg animate-pulse-slow flex-shrink-0">
//                     <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
//                   </div>
//                   <h3 className="text-lg sm:text-xl font-bold text-gray-900">AI Analysis & Insights</h3>
//                 </div>
//                 <div className="space-y-3 sm:space-y-4">
//                   <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-3 sm:p-4 border border-teal-200 hover:shadow-md hover:scale-[1.02] transition-all duration-300 cursor-pointer">
//                     <h4 className="text-xs sm:text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
//                       <Beaker className="w-3 h-3 sm:w-4 sm:h-4 text-teal-600 flex-shrink-0" />
//                       Design Rationale
//                     </h4>
//                     <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{aiResult.analysis.rationale}</p>
//                   </div>
//                   <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-3 sm:p-4 border border-teal-200 hover:shadow-md hover:scale-[1.02] transition-all duration-300 cursor-pointer">
//                     <h4 className="text-xs sm:text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
//                       <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-teal-600 flex-shrink-0" />
//                       Safety Notes
//                     </h4>
//                     <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{aiResult.analysis.notes}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column - Input Summary & References */}
//             <div className="space-y-6">
//               {/* Input Parameters */}
//               <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-emerald-100 p-4 sm:p-6 animate-fadeIn animation-delay-400 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
//                 <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
//                   <User className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 flex-shrink-0" />
//                   Patient Profile
//                 </h3>
//                 <div className="space-y-3 sm:space-y-4">
//                   <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-3 sm:p-4 border border-emerald-200">
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-2">
//                         <User className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-600 flex-shrink-0" />
//                         <span className="text-xs sm:text-sm font-semibold text-gray-600">Age</span>
//                       </div>
//                       <span className="text-base sm:text-lg font-bold text-gray-900">{formData.age} years</span>
//                     </div>
//                   </div>
//                   <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-3 sm:p-4 border border-emerald-200">
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-2">
//                         <Droplets className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-600 flex-shrink-0" />
//                         <span className="text-xs sm:text-sm font-semibold text-gray-600">Melanin Level</span>
//                       </div>
//                       <span className="text-base sm:text-lg font-bold text-gray-900">{formData.melanin}</span>
//                     </div>
//                   </div>
//                   <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-3 sm:p-4 border border-emerald-200">
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-2">
//                         <Sun className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-600 flex-shrink-0" />
//                         <span className="text-xs sm:text-sm font-semibold text-gray-600">Light Exposure</span>
//                       </div>
//                       <span className="text-base sm:text-lg font-bold text-gray-900 capitalize">{formData.light}</span>
//                     </div>
//                   </div>
//                   <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-3 sm:p-4 border border-emerald-200">
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-2">
//                         <Eye className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-600 flex-shrink-0" />
//                         <span className="text-xs sm:text-sm font-semibold text-gray-600">Eye Sensitivity</span>
//                       </div>
//                       <span className="text-base sm:text-lg font-bold text-gray-900 capitalize">{formData.sensitivity}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {/* Reference Sample (only top match if image exists) */}
//               {nearestSamples && nearestSamples.length > 0 && (
//                 <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-lime-100 p-4 sm:p-6 animate-fadeIn animation-delay-600 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
//                   <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
//                     <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-lime-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg animate-pulse-slow flex-shrink-0">
//                       <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
//                     </div>
//                     <h3 className="text-base sm:text-lg font-bold text-gray-900">
//                       Reference Sample Match
//                     </h3>
//                   </div>

//                   {/* Only first sample */}
//                   <div className="relative rounded-xl overflow-hidden border-2 border-lime-200 shadow-md">
//                     <img
//                       src={`${import.meta.env.VITE_API_BASE_URL}/${nearestSamples[0]}.jpg`}
//                       alt={nearestSamples[0]}
//                       className="w-full h-56 sm:h-64 object-cover"
//                       onError={(e) => (e.target.style.display = 'none')}
//                     />
//                     <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
//                       <div className="flex items-center justify-between">
//                         <span className="font-bold text-lg">{nearestSamples[0]}</span>
//                         {confidence >= 99 && (
//                           <span className="bg-yellow-400 text-black font-bold text-xs px-2 py-1 rounded-full">
//                             100% Match
//                           </span>
//                         )}
//                       </div>
//                       <p className="text-xs text-gray-100 mt-1">
//                         Closest match from biomedical database
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               )}


//               {/* Safety Badge */}
//               <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl shadow-xl p-4 sm:p-6 text-white animate-fadeIn animation-delay-800 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
//                 <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
//                   <Shield className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
//                   <h3 className="text-base sm:text-lg font-bold">Membrane Validated</h3>
//                 </div>
//                 <p className="text-xs sm:text-sm text-emerald-50">
//                   This micro-iris membrane design has been validated by AI analysis and cross-referenced with {nearestSamples.length} similar patient profiles for photophobia reduction.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Footer */}
//           <div className="text-center mt-6 sm:mt-8 px-4">
//             <p className="text-xs sm:text-sm text-gray-500 flex items-center justify-center gap-2 flex-wrap">
//               <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
//               <span>Powered by GPT-4 AI · Smart Micral-Iris Membrane Intelligence System</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 p-6 relative overflow-hidden">
//       {/* Animated Background Orbs */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-0 -left-4 w-96 h-96 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
//         <div className="absolute top-0 -right-4 w-96 h-96 bg-gradient-to-br from-green-400 to-lime-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
//         <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
//         <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-lime-400 to-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-6000"></div>
//       </div>

//       <div className="max-w-5xl mx-auto relative z-10 px-4 sm:px-6">
//         {/* Header */}
//         <div className="text-center mb-6 sm:mb-8 animate-fadeIn">
//           <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-3">
//             <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center shadow-xl animate-pulse-slow flex-shrink-0">
//               <Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
//             </div>
//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent animate-gradient">
//               Micral-Iris AI
//             </h1>
//           </div>
//           <p className="text-base sm:text-lg md:text-xl text-gray-700 font-semibold mb-1 px-4">Smart Micral-Iris Membrane Intelligence System</p>
//           <p className="text-xs sm:text-sm text-gray-500 flex items-center justify-center gap-2 px-4">
//             <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse flex-shrink-0" />
//             AI-Powered Photophobia Reduction for Albinism
//           </p>
//         </div>

//         {/* Main Input Card */}
//         <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl border-2 border-emerald-100 p-4 sm:p-6 md:p-8 animate-fadeIn animation-delay-200 hover:shadow-3xl transition-all duration-300">
//           <div className="mb-6 sm:mb-8">
//             <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
//               <User className="w-5 h-5 sm:w-7 sm:h-7 text-emerald-600 flex-shrink-0" />
//               Patient Profile Input
//             </h2>
//             <p className="text-sm sm:text-base text-gray-600">Enter patient characteristics for personalized membrane design</p>
//           </div>

//           {error && (
//             <div className="mb-4 sm:mb-6 bg-red-50 border-2 border-red-200 rounded-xl p-3 sm:p-4 flex items-start gap-2 sm:gap-3">
//               <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0 mt-0.5" />
//               <p className="text-sm sm:text-base text-red-700 font-medium">{error}</p>
//             </div>
//           )}

//           {/* Basic Parameters */}
//           <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
//             {/* Age */}
//             <div>
//               <label className="block text-base sm:text-lg font-bold text-gray-800 mb-2 sm:mb-3 flex items-center gap-2">
//                 <User className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 flex-shrink-0" />
//                 Age
//                 <span className="text-xs sm:text-sm font-normal text-gray-500">(years)</span>
//               </label>
//               <input
//                 type="number"
//                 step="1"
//                 min="0"
//                 max="120"
//                 value={formData.age}
//                 onChange={(e) => handleInputChange('age', e.target.value)}
//                 className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-emerald-50 border-2 border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 text-gray-900 font-semibold text-base sm:text-lg hover:bg-emerald-100 hover:border-emerald-300 hover:shadow-md"
//                 placeholder="Enter your age"
//               />
//             </div>

//             {/* Melanin */}
//             <div>
//               <label className="block text-base sm:text-lg font-bold text-gray-800 mb-2 sm:mb-3 flex items-center gap-2">
//                 <Droplets className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 flex-shrink-0" />
//                 Melanin Level
//                 <span className="text-xs sm:text-sm font-normal text-gray-500">(0.0 - 1.0)</span>
//               </label>
//               <input
//                 type="number"
//                 step="0.1"
//                 min="0"
//                 max="1"
//                 value={formData.melanin}
//                 onChange={(e) => handleInputChange('melanin', e.target.value)}
//                 className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-emerald-50 border-2 border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 text-gray-900 font-semibold text-base sm:text-lg hover:bg-emerald-100 hover:border-emerald-300 hover:shadow-md"
//                 placeholder="Enter melanin level (e.g., 0.5)"
//               />
//               <p className="mt-2 text-xs text-gray-500">Lower values = lighter skin, Higher values = darker skin</p>
//             </div>

//             {/* Light Exposure */}
//             <div>
//               <label className="block text-base sm:text-lg font-bold text-gray-800 mb-2 sm:mb-3 flex items-center gap-2">
//                 <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 flex-shrink-0" />
//                 Light Exposure Level
//               </label>
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
//                 {lightLevels.map(level => (
//                   <button
//                     key={level.value}
//                     onClick={() => handleInputChange('light', level.value)}
//                     className={`px-4 sm:px-6 py-3 sm:py-4 rounded-xl border-2 font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg ${formData.light === level.value
//                       ? 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white border-emerald-600 shadow-lg'
//                       : 'bg-emerald-50 text-gray-700 border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300'
//                       }`}
//                   >
//                     <div className="text-xl sm:text-2xl mb-1">{level.icon}</div>
//                     {level.label}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Eye Sensitivity */}
//             <div>
//               <label className="block text-base sm:text-lg font-bold text-gray-800 mb-2 sm:mb-3 flex items-center gap-2">
//                 <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 flex-shrink-0" />
//                 Eye Sensitivity
//               </label>
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
//                 {sensitivityLevels.map(level => (
//                   <button
//                     key={level.value}
//                     onClick={() => handleInputChange('sensitivity', level.value)}
//                     className={`px-4 sm:px-6 py-3 sm:py-4 rounded-xl border-2 font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg ${formData.sensitivity === level.value
//                       ? `bg-gradient-to-br ${level.color} text-white border-transparent shadow-lg`
//                       : 'bg-emerald-50 text-gray-700 border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300'
//                       }`}
//                   >
//                     {level.label}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
//             <button
//               onClick={handleReset}
//               className="px-6 sm:px-8 py-3 sm:py-4 bg-gray-100 border-2 border-gray-300 rounded-xl hover:bg-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300 font-bold text-gray-700 shadow-sm text-base sm:text-lg order-2 sm:order-1"
//             >
//               Reset
//             </button>
//             <button
//               onClick={handleAnalyze}
//               disabled={loading}
//               className="flex-1 bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 hover:from-emerald-700 hover:via-teal-700 hover:to-green-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 sm:gap-3 shadow-xl text-base sm:text-lg animate-gradient-x order-1 sm:order-2"
//             >
//               {loading ? (
//                 <>
//                   <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
//                   <span className="hidden sm:inline">Analyzing...</span>
//                   <span className="sm:hidden">Analyzing...</span>
//                 </>
//               ) : (
//                 <>
//                   <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
//                   <span className="hidden sm:inline">Design Micral-Iris Membrane</span>
//                   <span className="sm:hidden">Design Membrane</span>
//                 </>
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="text-center mt-6 sm:mt-8 px-4">
//           <p className="text-xs sm:text-sm text-gray-500 flex items-center justify-center gap-2 flex-wrap">
//             <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
//             <span>Powered by GPT-4 AI · Smart Micral-Iris Membrane Intelligence System</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

// // Add this to your global CSS or Tailwind config
// const styles = `
//   @keyframes blob {
//     0%, 100% {
//       transform: translate(0, 0) scale(1);
//     }
//     25% {
//       transform: translate(20px, -50px) scale(1.1);
//     }
//     50% {
//       transform: translate(-20px, 20px) scale(0.9);
//     }
//     75% {
//       transform: translate(50px, 50px) scale(1.05);
//     }
//   }

//   @keyframes fadeIn {
//     from {
//       opacity: 0;
//       transform: translateY(20px);
//     }
//     to {
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }

//   @keyframes gradient-x {
//     0%, 100% {
//       background-position: 0% 50%;
//     }
//     50% {
//       background-position: 100% 50%;
//     }
//   }

//   @keyframes pulse-slow {
//     0%, 100% {
//       opacity: 1;
//     }
//     50% {
//       opacity: 0.8;
//     }
//   }

//   .animate-blob {
//     animation: blob 7s infinite;
//   }

//   .animate-fadeIn {
//     animation: fadeIn 0.6s ease-out forwards;
//   }

//   .animate-gradient-x {
//     background-size: 200% 200%;
//     animation: gradient-x 3s ease infinite;
//   }

//   .animate-pulse-slow {
//     animation: pulse-slow 3s ease-in-out infinite;
//   }

//   .animation-delay-200 {
//     animation-delay: 0.2s;
//   }

//   .animation-delay-400 {
//     animation-delay: 0.4s;
//   }

//   .animation-delay-600 {
//     animation-delay: 0.6s;
//   }

//   .animation-delay-800 {
//     animation-delay: 0.8s;
//   }

//   .animation-delay-2000 {
//     animation-delay: 2s;
//   }

//   .animation-delay-4000 {
//     animation-delay: 4s;
//   }

//   .animation-delay-6000 {
//     animation-delay: 6s;
//   }

//   .shadow-3xl {
//     box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
//   }
// `;

// if (typeof document !== 'undefined') {
//   const styleSheet = document.createElement("style");
//   styleSheet.innerText = styles;
//   document.head.appendChild(styleSheet);
// }


import React, { useState } from 'react';
import { Droplets, Sun, Eye, User, Sparkles, TrendingUp, CheckCircle2, AlertCircle, RefreshCw, Activity, Beaker, Shield, Leaf, BookOpen, ExternalLink } from 'lucide-react';

const App = () => {
  const [formData, setFormData] = useState({
    age: '25',
    melanin: '0.5',
    light: 'medium',
    sensitivity: 'moderate'
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const lightLevels = [
    { value: 'low', label: 'Low', icon: '🌙' },
    { value: 'medium', label: 'Medium', icon: '☁️' },
    { value: 'high', label: 'High', icon: '☀️' }
  ];

  const sensitivityLevels = [
    { value: 'low', label: 'Low', color: 'from-green-400 to-emerald-500' },
    { value: 'moderate', label: 'Moderate', color: 'from-yellow-400 to-orange-500' },
    { value: 'severe', label: 'Severe', color: 'from-red-400 to-pink-500' }
  ];

  const handleInputChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleAnalyze = async () => {
    if (!formData.age || !formData.melanin) {
      setError('Please fill in age and melanin level');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/analyze`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          age: parseFloat(formData.age),
          melanin: parseFloat(formData.melanin),
          light: formData.light,
          sensitivity: formData.sensitivity
        })
      });

      const data = await response.json();

      if (data.ok) {
        setResult(data);
      } else {
        setError(data.error || 'Analysis failed');
      }
    } catch (err) {
      setError('Failed to connect to analysis server. Please ensure the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      age: '',
      melanin: '',
      light: 'medium',
      sensitivity: 'moderate'
    });
    setResult(null);
    setError(null);
  };

  const getIrritationColor = (risk) => {
    if (risk === 'Low') return 'text-green-600 bg-green-100';
    if (risk === 'Moderate') return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  if (result) {
    const { aiResult, confidence, nearestSamples, scientificReferences } = result;

    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 p-6 relative overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-96 h-96 bg-gradient-to-br from-green-400 to-lime-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-lime-400 to-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-6000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 animate-fadeIn">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg animate-pulse-slow">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Micral-Iris Membrane Analysis</h1>
                <p className="text-xs sm:text-sm text-gray-600">Photophobia Reduction for Albinism</p>
              </div>
            </div>
            <button
              onClick={() => setResult(null)}
              className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl hover:border-emerald-500 hover:bg-emerald-50 hover:shadow-lg transition-all duration-300 font-semibold text-gray-700 shadow-sm transform hover:scale-105 text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              <RefreshCw className="w-4 h-4" />
              New Analysis
            </button>
          </div>

          {/* Confidence Banner */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-emerald-100 p-4 sm:p-6 mb-6 animate-fadeIn animation-delay-200 hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shadow-lg animate-pulse-slow flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Membrane Design Complete</h2>
                  <p className="text-xs sm:text-sm text-gray-600">Personalized micro-iris membrane formulation</p>
                </div>
              </div>
              <div className="text-left sm:text-right w-full sm:w-auto">
                <div className="text-3xl sm:text-4xl font-bold text-gray-900">{confidence.toFixed(2)}%</div>
                <div className="text-xs sm:text-sm font-semibold text-emerald-600">
                  {confidence >= 90 ? 'Excellent' : confidence >= 70 ? 'High' : 'Moderate'} Confidence
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Left Column - Design & Performance */}
            <div className="lg:col-span-2 space-y-6">
              {/* Optimal Mixture Design */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-emerald-100 p-4 sm:p-6 animate-fadeIn animation-delay-400 hover:shadow-2xl hover:scale-[1.01] transition-all duration-300">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center shadow-lg animate-pulse-slow flex-shrink-0">
                    <Beaker className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">Optimal Mixture Design</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-3 sm:p-4 border border-emerald-200 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
                    <p className="text-xs font-semibold text-gray-600 mb-1">CeO₂ (Cerium Oxide)</p>
                    <p className="text-base sm:text-lg font-bold text-gray-900">{aiResult.design.CeO2_g.toFixed(2)} g</p>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-3 sm:p-4 border border-emerald-200 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
                    <p className="text-xs font-semibold text-gray-600 mb-1">Sb₂S₃ (Antimony Sulfide)</p>
                    <p className="text-base sm:text-lg font-bold text-gray-900">{aiResult.design.Sb2S3_g.toFixed(2)} g</p>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-3 sm:p-4 border border-emerald-200 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
                    <p className="text-xs font-semibold text-gray-600 mb-1">Ozone Water</p>
                    <p className="text-base sm:text-lg font-bold text-gray-900">{aiResult.design.ozoneWater_ml.toFixed(1)} ml</p>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-3 sm:p-4 border border-emerald-200 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
                    <p className="text-xs font-semibold text-gray-600 mb-1">Mushroom Extract</p>
                    <p className="text-base sm:text-lg font-bold text-gray-900">{aiResult.design.mushroomExtract_ml.toFixed(1)} ml</p>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-3 sm:p-4 border border-emerald-200 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer sm:col-span-2">
                    <p className="text-xs font-semibold text-gray-600 mb-1">Tannic Acid</p>
                    <p className="text-base sm:text-lg font-bold text-gray-900">{aiResult.design.tannicAcid_ml.toFixed(2)} ml</p>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-teal-100 p-4 sm:p-6 animate-fadeIn animation-delay-600 hover:shadow-2xl hover:scale-[1.01] transition-all duration-300">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center shadow-lg animate-pulse-slow flex-shrink-0">
                    <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">Performance Metrics</h3>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-3 sm:p-4 border border-teal-200 hover:shadow-md hover:scale-105 transition-all duration-300">
                    <p className="text-xs font-semibold text-gray-600 mb-1">Optical Transmittance</p>
                    <p className="text-lg sm:text-2xl font-bold text-gray-900">{aiResult.performance.opticalTransmittance_pct.toFixed(1)}%</p>
                  </div>
                  <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-3 sm:p-4 border border-teal-200 hover:shadow-md hover:scale-105 transition-all duration-300">
                    <p className="text-xs font-semibold text-gray-600 mb-1">Glare Reduction</p>
                    <p className="text-lg sm:text-2xl font-bold text-gray-900">{aiResult.performance.glareReduction_pct.toFixed(1)}%</p>
                  </div>
                  <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-3 sm:p-4 border border-teal-200 hover:shadow-md hover:scale-105 transition-all duration-300">
                    <p className="text-xs font-semibold text-gray-600 mb-1">Ocular Safety Index</p>
                    <p className="text-lg sm:text-2xl font-bold text-gray-900">{aiResult.performance.ocularSafetyIndex.toFixed(1)}</p>
                  </div>
                  <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-3 sm:p-4 border border-teal-200 hover:shadow-md hover:scale-105 transition-all duration-300">
                    <p className="text-xs font-semibold text-gray-600 mb-1">Biocompatibility</p>
                    <p className="text-lg sm:text-2xl font-bold text-gray-900">{aiResult.performance.biocompatibilityScore.toFixed(1)}</p>
                  </div>
                </div>
              </div>

              {/* AI Analysis */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-teal-100 p-4 sm:p-6 animate-fadeIn animation-delay-800 hover:shadow-2xl hover:scale-[1.01] transition-all duration-300">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center shadow-lg animate-pulse-slow flex-shrink-0">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">AI Analysis</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-3 sm:p-4 border border-purple-200">
                    <p className="text-xs font-semibold text-gray-600 mb-2">Scientific Rationale</p>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{aiResult.analysis.rationale}</p>
                  </div>
                  <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-3 sm:p-4 border border-amber-200">
                    <p className="text-xs font-semibold text-gray-600 mb-2">Clinical Notes</p>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{aiResult.analysis.notes}</p>
                  </div>
                </div>
              </div>

              {/* Scientific References Section */}
              {scientificReferences && scientificReferences.length > 0 && (
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-blue-100 p-4 sm:p-6 animate-fadeIn animation-delay-1000 hover:shadow-2xl hover:scale-[1.01] transition-all duration-300">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg animate-pulse-slow flex-shrink-0">
                      <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">Scientific References</h3>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    {scientificReferences.map((ref, index) => (
                      <div
                        key={ref.id}
                        className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-3 sm:p-4 border border-blue-200 hover:shadow-md hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                            {index + 1}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-1 leading-tight">
                              {ref.title}
                            </h4>
                            <p className="text-xs text-gray-600 mb-2">
                              {ref.authors} • <span className="font-semibold">{ref.journal}</span> ({ref.year})
                            </p>
                            <p className="text-xs sm:text-sm text-gray-700 mb-2 leading-relaxed">
                              {ref.summary}
                            </p>
                            <div className="flex flex-wrap items-center gap-2">
                              <a
                                href={`https://doi.org/${ref.doi}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                              >
                                <ExternalLink className="w-3 h-3" />
                                DOI: {ref.doi}
                              </a>
                              <div className="flex flex-wrap gap-1">
                                {ref.relevance.map((tag, tagIndex) => (
                                  <span
                                    key={tagIndex}
                                    className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Technical Info */}
            <div className="space-y-6">
              {/* Patient Profile */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-emerald-100 p-4 sm:p-6 animate-fadeIn animation-delay-400 hover:shadow-2xl hover:scale-[1.01] transition-all duration-300">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center shadow-lg animate-pulse-slow flex-shrink-0">
                    <User className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">Patient Profile</h3>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-3 sm:p-4 border border-emerald-200">
                    <p className="text-xs font-semibold text-gray-600 mb-1">Age</p>
                    <p className="text-base sm:text-lg font-bold text-gray-900">{formData.age} years</p>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-3 sm:p-4 border border-emerald-200">
                    <p className="text-xs font-semibold text-gray-600 mb-1">Melanin Level</p>
                    <p className="text-base sm:text-lg font-bold text-gray-900">{parseFloat(formData.melanin).toFixed(2)}</p>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-3 sm:p-4 border border-emerald-200">
                    <p className="text-xs font-semibold text-gray-600 mb-1">Light Exposure</p>
                    <p className="text-base sm:text-lg font-bold text-gray-900 capitalize">{formData.light}</p>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-3 sm:p-4 border border-emerald-200">
                    <p className="text-xs font-semibold text-gray-600 mb-1">Eye Sensitivity</p>
                    <p className="text-base sm:text-lg font-bold text-gray-900 capitalize">{formData.sensitivity}</p>
                  </div>
                </div>
              </div>

              {/* Reference Sample Match with Image */}
              {nearestSamples && nearestSamples.length > 0 && (
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-lime-100 p-4 sm:p-6 animate-fadeIn animation-delay-600 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-lime-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg animate-pulse-slow flex-shrink-0">
                      <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900">
                      Reference Sample Match
                    </h3>
                  </div>

                  {/* Only first sample with image */}
                  <div className="relative rounded-xl overflow-hidden border-2 border-lime-200 shadow-md">
                    <img
                      src={`${import.meta.env.VITE_API_BASE_URL}/${nearestSamples[0]}.jpg`}
                      alt={nearestSamples[0]}
                      className="w-full h-56 sm:h-64 object-cover"
                      onError={(e) => (e.target.style.display = 'none')}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-lg">{nearestSamples[0]}</span>
                        {confidence >= 99 && (
                          <span className="bg-yellow-400 text-black font-bold text-xs px-2 py-1 rounded-full">
                            100% Match
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-100 mt-1">
                        Closest match from biomedical database
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Safety Badge */}
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl shadow-xl p-4 sm:p-6 text-white animate-fadeIn animation-delay-800 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
                  <h3 className="text-base sm:text-lg font-bold">Membrane Validated</h3>
                </div>
                <p className="text-xs sm:text-sm text-emerald-50">
                  This micro-iris membrane design has been validated by AI analysis and cross-referenced with {nearestSamples.length} similar patient profiles for photophobia reduction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Input Form
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 p-4 sm:p-6 relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-gradient-to-br from-green-400 to-lime-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-lime-400 to-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-6000"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 animate-fadeIn">
          <div className="flex justify-center mb-3 sm:mb-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center shadow-2xl animate-pulse-slow">
              <Leaf className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 sm:mb-3">
            Smart Micral-Iris Membrane Designer
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            AI-powered personalized membrane formulation for photophobia reduction in albinism
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 bg-red-50 border-2 border-red-200 rounded-xl p-4 flex items-center gap-3 animate-fadeIn shadow-lg">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
            <p className="text-sm text-red-800 font-medium">{error}</p>
          </div>
        )}

        {/* Input Form */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border-2 border-emerald-100 p-4 sm:p-6 md:p-8 animate-fadeIn animation-delay-200 hover:shadow-3xl transition-all duration-300">
          <div className="space-y-6 sm:space-y-8">
            {/* Age Input */}
            <div>
              <label className="block text-base sm:text-lg font-bold text-gray-800 mb-2 sm:mb-3 flex items-center gap-2">
                <User className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 flex-shrink-0" />
                Patient Age (years)
              </label>
              <input
                type="number"
                value={formData.age}
                onChange={(e) => handleInputChange('age', e.target.value)}
                placeholder="Enter age"
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-emerald-50 border-2 border-emerald-200 rounded-xl focus:ring-4 focus:ring-emerald-300 focus:border-emerald-500 outline-none transition-all duration-300 font-semibold text-base sm:text-lg hover:shadow-lg text-gray-900"
              />
            </div>

            {/* Melanin Input */}
            <div>
              <label className="block text-base sm:text-lg font-bold text-gray-800 mb-2 sm:mb-3 flex items-center gap-2">
                <Droplets className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 flex-shrink-0" />
                Melanin Level (0.0 - 1.0)
              </label>
              <input
                type="number"
                step="0.1"
                min="0"
                max="1"
                value={formData.melanin}
                onChange={(e) => handleInputChange('melanin', e.target.value)}
                placeholder="Enter melanin level"
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-emerald-50 border-2 border-emerald-200 rounded-xl focus:ring-4 focus:ring-emerald-300 focus:border-emerald-500 outline-none transition-all duration-300 font-semibold text-base sm:text-lg hover:shadow-lg text-gray-900"
              />
            </div>

            {/* Light Exposure */}
            <div>
              <label className="block text-base sm:text-lg font-bold text-gray-800 mb-2 sm:mb-3 flex items-center gap-2">
                <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 flex-shrink-0" />
                Light Exposure Level
              </label>
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {lightLevels.map(level => (
                  <button
                    key={level.value}
                    onClick={() => handleInputChange('light', level.value)}
                    className={`px-3 sm:px-6 py-3 sm:py-4 rounded-xl border-2 font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex flex-col items-center gap-1 sm:gap-2 ${formData.light === level.value
                      ? 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white border-emerald-600 shadow-lg'
                      : 'bg-emerald-50 text-gray-700 border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300'
                      }`}
                  >
                    <div className="text-xl sm:text-2xl mb-1">{level.icon}</div>
                    {level.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Eye Sensitivity */}
            <div>
              <label className="block text-base sm:text-lg font-bold text-gray-800 mb-2 sm:mb-3 flex items-center gap-2">
                <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 flex-shrink-0" />
                Eye Sensitivity
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                {sensitivityLevels.map(level => (
                  <button
                    key={level.value}
                    onClick={() => handleInputChange('sensitivity', level.value)}
                    className={`px-4 sm:px-6 py-3 sm:py-4 rounded-xl border-2 font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg ${formData.sensitivity === level.value
                      ? `bg-gradient-to-br ${level.color} text-white border-transparent shadow-lg`
                      : 'bg-emerald-50 text-gray-700 border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300'
                      }`}
                  >
                    {level.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
            <button
              onClick={handleReset}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gray-100 border-2 border-gray-300 rounded-xl hover:bg-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300 font-bold text-gray-700 shadow-sm text-base sm:text-lg order-2 sm:order-1"
            >
              Reset
            </button>
            <button
              onClick={handleAnalyze}
              disabled={loading}
              className="flex-1 bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 hover:from-emerald-700 hover:via-teal-700 hover:to-green-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 sm:gap-3 shadow-xl text-base sm:text-lg animate-gradient-x order-1 sm:order-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span className="hidden sm:inline">Analyzing...</span>
                  <span className="sm:hidden">Analyzing...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                  <span className="hidden sm:inline">Design Micral-Iris Membrane</span>
                  <span className="sm:hidden">Design Membrane</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 sm:mt-8 px-4">
          <p className="text-xs sm:text-sm text-gray-500 flex items-center justify-center gap-2 flex-wrap">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span>Powered by GPT-4 AI · Smart Micral-Iris Membrane Intelligence System</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;

// Add this to your global CSS or Tailwind config
const styles = `
  @keyframes blob {
    0%, 100% {
      transform: translate(0, 0) scale(1);
    }
    25% {
      transform: translate(20px, -50px) scale(1.1);
    }
    50% {
      transform: translate(-20px, 20px) scale(0.9);
    }
    75% {
      transform: translate(50px, 50px) scale(1.05);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes gradient-x {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  @keyframes pulse-slow {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
  }

  .animate-blob {
    animation: blob 7s infinite;
  }

  .animate-fadeIn {
    animation: fadeIn 0.6s ease-out forwards;
  }

  .animate-gradient-x {
    background-size: 200% 200%;
    animation: gradient-x 3s ease infinite;
  }

  .animate-pulse-slow {
    animation: pulse-slow 3s ease-in-out infinite;
  }

  .animation-delay-200 {
    animation-delay: 0.2s;
  }

  .animation-delay-400 {
    animation-delay: 0.4s;
  }

  .animation-delay-600 {
    animation-delay: 0.6s;
  }

  .animation-delay-800 {
    animation-delay: 0.8s;
  }

  .animation-delay-1000 {
    animation-delay: 1s;
  }

  .animation-delay-2000 {
    animation-delay: 2s;
  }

  .animation-delay-4000 {
    animation-delay: 4s;
  }

  .animation-delay-6000 {
    animation-delay: 6s;
  }

  .shadow-3xl {
    box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
  }
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}