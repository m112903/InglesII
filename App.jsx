import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';

const { 
  BookOpen, PlayCircle, Headphones, Brain, HelpCircle, 
  CheckCircle2, ChevronRight, ChevronLeft, Menu,
  Award, Calendar, User, MessageSquare, CloudSun, Utensils
} = LucideIcons;

// Este es el componente principal que copiarás en tu archivo App.jsx en GitHub
const App = () => {
  const [activeUnit, setActiveUnit] = useState(0);
  const [activeTopic, setActiveTopic] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizScore, setQuizScore] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const units = [
    {
      id: 1,
      title: "Unit 1: What do we do in our free time?",
      icon: <Calendar className="w-5 h-5" />,
      topics: [
        { 
          title: "Routine verbs and present simple", 
          content: "Habla sobre tu vida diaria. Expresiones: on Mondays, at 6pm, in the morning.",
          interactive: "Actividad: Relaciona 'Have breakfast', 'Watch TV', y 'Study' con sus imágenes.",
          didYouKnow: "¡En los países de habla inglesa, el desayuno suele ser la comida más importante!",
          audioFile: "audio_u1_t1.mp3",
          videoFile: "video_u1_t1.mp4"
        },
        { 
          title: "Adverbs of frequency", 
          content: "Always, often, sometimes, never. ¿Qué tan seguido estudias?",
          interactive: "Escucha el audio e identifica la frecuencia de las actividades de ocio.",
          didYouKnow: "Los adverbios de frecuencia van ANTES del verbo principal, pero DESPUÉS del verbo 'to be'.",
          audioFile: "audio_u1_t2.mp3",
          videoFile: "video_u1_t2.mp4"
        },
        { 
          title: "Healthy habits", 
          content: "Uso de conectores: 'and', 'but', 'because'. Habla sobre ejercicio y salud.",
          interactive: "Trabajo en parejas: Haz preguntas con 'How often' sobre rutinas saludables.",
          didYouKnow: "Stay hydrated! En inglés usamos mucho el imperativo para dar consejos.",
          audioFile: "audio_u1_t3.mp3",
          videoFile: "video_u1_t3.mp4"
        },
        { 
          title: "Gender roles routines", 
          content: "Reflexión sobre la desigualdad en las rutinas diarias en diferentes culturas.",
          interactive: "Escritura: Redacta un párrafo sobre cómo los roles de género crean desigualdad.",
          didYouKnow: "La educación moderna en inglés se enfoca en romper estereotipos de género.",
          audioFile: "audio_u1_t4.mp3",
          videoFile: "video_u1_t4.mp4"
        }
      ],
      quiz: [
        { q: "I ___ (watch) TV on Mondays.", a: ["watch", "watches", "watching"], correct: 0 },
        { q: "She ___ (has) breakfast at 7 am.", a: ["have", "has", "haved"], correct: 1 },
        { q: "How ___ do you exercise?", a: ["many", "often", "much"], correct: 1 }
      ]
    },
    {
        id: 2,
        title: "Unit 2: What is happening?",
        icon: <CloudSun className="w-5 h-5" />,
        topics: [
          { 
            title: "Present continuous", 
            content: "Acciones ocurriendo ahora mismo. Subject + am/is/are + verb-ing.",
            interactive: "Identifica acciones en un lugar público concurrido.",
            didYouKnow: "El sufijo -ing se usa para acciones en progreso y gustos.",
            audioFile: "audio_u2_t1.mp3",
            videoFile: "video_u2_t1.mp4"
          },
          { 
            title: "Description of a picture", 
            content: "Describe ropa, accesorios y estados de ánimo en pinturas.",
            interactive: "Tarea de arte: Selecciona una pintura y descríbela en dos párrafos.",
            didYouKnow: "La palabra 'Art' viene del latín 'ars', que significa habilidad.",
            audioFile: "audio_u2_t2.mp3",
            videoFile: "video_u2_t2.mp4"
          },
          { 
            title: "Weather and Seasons", 
            content: "Condiciones climáticas y estaciones (Summer, Autumn, Winter, Spring).",
            interactive: "Proyecto de Video: Describe el clima en un lugar emblemático de México.",
            didYouKnow: "En el Reino Unido es muy común iniciar conversaciones hablando del clima.",
            audioFile: "audio_u2_t3.mp3",
            videoFile: "video_u2_t3.mp4"
          },
          { 
            title: "Sharing art descriptions", 
            content: "Preguntas y respuestas sobre actividades en progreso y vestuarios.",
            interactive: "Juego de adivinanzas: Solicita info de una imagen sin verla.",
            didYouKnow: "La moda y el clima están muy ligados en el vocabulario descriptivo.",
            audioFile: "audio_u2_t4.mp3",
            videoFile: "video_u2_t4.mp4"
          }
        ],
        quiz: [
          { q: "They ___ (play) football now.", a: ["is playing", "are playing", "play"], correct: 1 },
          { q: "Is she ___ (wear) a red dress?", a: ["wear", "wearing", "wears"], correct: 1 },
          { q: "There ___ two boys in the park.", a: ["is", "are", "am"], correct: 1 }
        ]
    },
    {
        id: 3,
        title: "Unit 3: Professional routines",
        icon: <Award className="w-5 h-5" />,
        topics: [
          { 
            title: "Routines of important people", 
            content: "Contraste entre rutinas permanentes y acciones laborales temporales.",
            interactive: "Juego de memoria: Une personajes con sus rutinas profesionales.",
            didYouKnow: "Las figuras públicas suelen tener rutinas fijas para ser productivos.",
            audioFile: "audio_u3_t1.mp3",
            videoFile: "video_u3_t1.mp4"
          },
          { 
            title: "Clothing stereotypes", 
            content: "Cuestionando la vestimenta profesional y roles de género.",
            interactive: "Escritura: Compara actividades y ropa de dos profesiones.",
            didYouKnow: "El concepto 'Business Casual' varía mucho entre países.",
            audioFile: "audio_u3_t2.mp3",
            videoFile: "video_u3_t2.mp4"
          },
          { 
            title: "Student routines", 
            content: "Proyectos académicos y vida estudiantil en diferentes carreras.",
            interactive: "Entrevista: Crea preguntas sobre la vida del estudiante.",
            didYouKnow: "Los estudiantes de CCH suelen participar en proyectos colaborativos.",
            audioFile: "audio_u3_t3.mp3",
            videoFile: "video_u3_t3.mp4"
          },
          { 
            title: "Sharing likes and dislikes", 
            content: "Verbos: love, like, hate, want, need. Expresión de intereses.",
            interactive: "Pizarra colaborativa: Comenta los intereses de tus compañeros.",
            didYouKnow: "En inglés, 'I am fond of' es una forma formal de decir que algo te gusta.",
            audioFile: "audio_u3_t4.mp3",
            videoFile: "video_u3_t4.mp4"
          }
        ],
        quiz: [
          { q: "I love ___ (read) books.", a: ["read", "reading", "to read"], correct: 1 },
          { q: "Currently, I ___ (work) on a project.", a: ["work", "am working", "working"], correct: 1 },
          { q: "Which program ___ you like?", a: ["do", "does", "is"], correct: 0 }
        ]
    },
    {
        id: 4,
        title: "Unit 4: What and how do we eat?",
        icon: <Utensils className="w-5 h-5" />,
        topics: [
          { 
            title: "Breakfast, lunch and dinner", 
            content: "Sustantivos contables e incontables. A/an, some, much/many.",
            interactive: "Lista: Identifica productos y clasifícalos.",
            didYouKnow: "¡En el Reino Unido, 'Tea' puede ser la bebida o una cena ligera!",
            audioFile: "audio_u4_t1.mp3",
            videoFile: "video_u4_t1.mp4"
          },
          { 
            title: "Famous recipes", 
            content: "Verbos de cocina: chop, stir, fry, boil. Costos y cantidades.",
            interactive: "Mapa mental: Categorías de comida, contenedores y preparación.",
            didYouKnow: "La receta inglesa más famosa es el Fish and Chips.",
            audioFile: "audio_u4_t2.mp3",
            videoFile: "video_u4_t2.mp4"
          },
          { 
            title: "Collaborative restaurant", 
            content: "Ingredientes, cantidades y pedir comida en un restaurante.",
            interactive: "Foro: Publica un platillo y pregunta por la receta.",
            didYouKnow: "Dejar propina es obligatorio en EE. UU. pero opcional en Reino Unido.",
            audioFile: "audio_u4_t3.mp3",
            videoFile: "video_u4_t3.mp4"
          },
          { 
            title: "Worldwide customs", 
            content: "Comida y celebraciones alrededor del mundo.",
            interactive: "Presentación: Habla sobre una celebración mexicana en inglés.",
            didYouKnow: "Muchos países celebran festivales de cosecha similares a México.",
            audioFile: "audio_u4_t4.mp3",
            videoFile: "video_u4_t4.mp4"
          }
        ],
        quiz: [
          { q: "How ___ milk do we need?", a: ["many", "much", "some"], correct: 1 },
          { q: "I have ___ apple in my bag.", a: ["a", "an", "some"], correct: 1 },
          { q: "There are ___ oranges on the table.", a: ["some", "any", "much"], correct: 0 }
        ]
    }
  ];

  const handleNextTopic = () => {
    if (activeTopic < units[activeUnit].topics.length - 1) {
      setActiveTopic(activeTopic + 1);
    } else {
      setShowQuiz(true);
    }
  };

  const currentUnit = units[activeUnit];
  const currentTopic = currentUnit.topics[activeTopic];

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-900 overflow-hidden">
      {/* Sidebar Navigation */}
      <aside className={`${sidebarOpen ? 'w-80' : 'w-20'} bg-indigo-900 text-white transition-all duration-300 flex flex-col shadow-2xl z-20`}>
        <div className="p-6 flex items-center gap-3 border-b border-indigo-800">
          <BookOpen className="w-8 h-8 text-indigo-400" />
          {sidebarOpen && <h1 className="font-bold text-xl tracking-tight">INGLÉS II</h1>}
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4">
          {units.map((unit, index) => (
            <button
              key={unit.id}
              onClick={() => {
                setActiveUnit(index);
                setActiveTopic(0);
                setShowQuiz(false);
                setQuizScore(null);
              }}
              className={`w-full flex items-center gap-4 px-6 py-4 transition-colors ${activeUnit === index ? 'bg-indigo-700 border-r-4 border-white' : 'hover:bg-indigo-800'}`}
            >
              <div className="flex-shrink-0">{unit.icon}</div>
              {sidebarOpen && <span className="text-sm font-medium text-left">{unit.title}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 bg-indigo-950">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-full flex justify-center p-2 rounded hover:bg-indigo-800 transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b p-4 flex justify-between items-center shadow-sm z-10">
          <div className="flex items-center gap-4">
            <h2 className="font-semibold text-lg text-indigo-900">{currentUnit.title}</h2>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 sm:p-8 max-w-5xl mx-auto w-full">
          {!showQuiz ? (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
              <section className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 border border-slate-200">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-800">{currentTopic.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">{currentTopic.content}</p>
                
                {/* REPRODUCTOR DE AUDIO */}
                <div className="bg-indigo-50 rounded-xl p-4 flex flex-col gap-2 border border-indigo-100">
                  <div className="flex items-center gap-4">
                    <div className="bg-indigo-600 p-2 rounded-full text-white">
                      <Headphones className="w-5 h-5" />
                    </div>
                    <p className="text-sm font-semibold text-indigo-900">Audio Support</p>
                  </div>
                  <audio controls className="w-full">
                    <source src={currentTopic.audioFile} type="audio/mpeg" />
                    Tu navegador no soporta el audio.
                  </audio>
                </div>
              </section>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* REPRODUCTOR DE VIDEO */}
                <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg group">
                  <div className="bg-indigo-600 px-3 py-1 text-[10px] font-bold text-white uppercase w-fit m-4 rounded">
                    Explanatory Video
                  </div>
                  <video controls className="w-full aspect-video bg-black">
                    <source src={currentTopic.videoFile} type="video/mp4" />
                    Tu navegador no soporta el video.
                  </video>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <Brain className="w-6 h-6 text-purple-600" />
                    <h4 className="font-bold text-lg">Unit Summary Map</h4>
                  </div>
                  <div className="flex-1 border-2 border-dashed border-slate-200 rounded-xl flex items-center justify-center bg-slate-50 relative min-h-[150px]">
                     <div className="text-center p-4">
                        <div className="w-16 h-16 bg-indigo-100 rounded-full mx-auto flex items-center justify-center mb-2">
                           <span className="font-bold text-indigo-600">{currentUnit.id}</span>
                        </div>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Concept View</p>
                     </div>
                  </div>
                </div>
              </div>

              <section className="bg-white rounded-2xl shadow-sm p-6 border border-slate-200">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h4 className="text-xl font-bold">Interactive Activity</h4>
                </div>
                <div className="bg-slate-50 border-2 border-slate-100 rounded-xl p-6 text-center">
                  <p className="text-slate-700 italic mb-6 text-lg">"{currentTopic.interactive}"</p>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg transition-all hover:-translate-y-1">
                    Comenzar Ejercicio
                  </button>
                </div>
              </section>

              <section className="bg-amber-50 rounded-2xl p-6 border border-amber-100 flex gap-6">
                <div className="bg-amber-400 p-4 rounded-2xl text-white h-fit hidden sm:block">
                  <HelpCircle className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-amber-900 font-black text-xl mb-2">Did You Know?</h4>
                  <p className="text-amber-800 text-lg italic">"{currentTopic.didYouKnow}"</p>
                </div>
              </section>

              <div className="flex justify-between items-center pt-8 border-t">
                <button 
                  disabled={activeTopic === 0}
                  onClick={() => setActiveTopic(activeTopic - 1)}
                  className="text-slate-500 hover:text-indigo-600 disabled:opacity-30 font-bold flex items-center gap-2"
                >
                  <ChevronLeft className="w-5 h-5" /> Atrás
                </button>
                <button 
                  onClick={handleNextTopic}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg flex items-center gap-2"
                >
                  {activeTopic === currentUnit.topics.length - 1 ? "Ir al Test" : "Siguiente Tema"} <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ) : (
            /* Quiz */
            <div className="max-w-2xl mx-auto py-10">
              {quizScore === null ? (
                <div className="bg-white rounded-3xl shadow-xl p-10 border border-slate-100">
                  <h3 className="text-3xl font-black text-indigo-900 mb-8 text-center">Unit {currentUnit.id} Test</h3>
                  <div className="space-y-10">
                    {currentUnit.quiz.map((q, idx) => (
                      <div key={idx} className="space-y-4">
                        <p className="text-xl font-bold">{idx + 1}. {q.q}</p>
                        <div className="grid grid-cols-1 gap-3">
                          {q.a.map((opt, oIdx) => (
                            <button key={oIdx} className="w-full text-left p-4 rounded-xl border-2 hover:border-indigo-500 transition-all">
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <button onClick={() => setQuizScore(100)} className="w-full mt-12 bg-indigo-600 text-white py-5 rounded-2xl font-black text-xl">
                    ENVIAR RESPUESTAS
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
                  <h4 className="text-3xl font-bold mb-10">¡Unidad completada!</h4>
                  <div className="text-7xl font-black text-indigo-600 mb-10">100%</div>
                  <button 
                    onClick={() => {
                      if (activeUnit < units.length - 1) {
                        setActiveUnit(activeUnit + 1);
                        setActiveTopic(0);
                        setShowQuiz(false);
                        setQuizScore(null);
                      } else {
                        setActiveTopic(99); 
                        setShowQuiz(false);
                      }
                    }}
                    className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold"
                  >
                    Siguiente Unidad
                  </button>
                </div>
              )}
            </div>
          )}

          {activeTopic === 99 && (
            <div className="max-w-2xl mx-auto py-12 text-center space-y-12">
               <div className="w-40 h-40 bg-slate-200 rounded-full mx-auto flex items-center justify-center">
                  <User className="w-20 h-20 text-slate-400" />
               </div>
               <h3 className="text-4xl font-black text-indigo-900">¡Curso Finalizado!</h3>
               <p className="text-slate-700">Has concluido satisfactoriamente la materia de Inglés II.</p>
               <div className="bg-white p-8 rounded-3xl shadow-md text-left">
                  <p className="font-bold text-indigo-600 mb-2">Créditos:</p>
                  <p>Plataforma desarrollada para el Bachiller CCH.</p>
               </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
