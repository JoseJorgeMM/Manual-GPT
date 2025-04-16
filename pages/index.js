
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ManualInteractivo() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Manual Interactivo - I.E. Jesús Rey</h1>
      <Tabs defaultValue="estudiantes" className="w-full">
        <TabsList className="flex flex-wrap gap-2 justify-center">
          <TabsTrigger value="estudiantes">Estudiantes</TabsTrigger>
          <TabsTrigger value="padres">Padres de Familia</TabsTrigger>
          <TabsTrigger value="docentes">Docentes</TabsTrigger>
          <TabsTrigger value="convivencia">Convivencia Escolar</TabsTrigger>
          <TabsTrigger value="debido_proceso">Debido Proceso</TabsTrigger>
          <TabsTrigger value="estimulos">Estímulos</TabsTrigger>
        </TabsList>

        <TabsContent value="estudiantes">
          <ScrollArea className="h-[500px] p-4 border rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Derechos de los Estudiantes</h2>
            <ul className="list-decimal ml-5 space-y-1">
              {[...Array(59)].map((_, i) => <li key={i}>Derecho {i + 1} según el manual.</li>)}
            </ul>
            <h2 className="text-xl font-semibold mt-6 mb-4">Deberes de los Estudiantes</h2>
            <ul className="list-decimal ml-5 space-y-1">
              {[...Array(55)].map((_, i) => <li key={i}>Deber {i + 1} según el manual.</li>)}
            </ul>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="padres">
          <ScrollArea className="h-[500px] p-4 border rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Derechos de los Padres de Familia</h2>
            <ul className="list-decimal ml-5 space-y-1">
              {[...Array(24)].map((_, i) => <li key={i}>Derecho {i + 1} según el manual.</li>)}
            </ul>
            <h2 className="text-xl font-semibold mt-6 mb-4">Deberes de los Padres de Familia</h2>
            <ul className="list-decimal ml-5 space-y-1">
              {[...Array(26)].map((_, i) => <li key={i}>Deber {i + 1} según el manual.</li>)}
            </ul>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="docentes">
          <ScrollArea className="h-[500px] p-4 border rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Derechos de Docentes y Directivos</h2>
            <ul className="list-decimal ml-5 space-y-1">
              {[...Array(19)].map((_, i) => <li key={i}>Derecho {i + 1} según el manual.</li>)}
            </ul>
            <h2 className="text-xl font-semibold mt-6 mb-4">Deberes de Docentes y Directivos</h2>
            <ul className="list-decimal ml-5 space-y-1">
              {[...Array(16)].map((_, i) => <li key={i}>Deber {i + 1} según el manual.</li>)}
            </ul>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="convivencia">
          <ScrollArea className="h-[500px] p-4 border rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Clasificación de las Situaciones</h2>
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>Tipo I:</strong> 26 situaciones menores.</li>
              <li><strong>Tipo II:</strong> 8 situaciones de mediana gravedad.</li>
              <li><strong>Tipo III:</strong> 26 situaciones graves o delictivas.</li>
            </ul>
            <h2 className="text-xl font-semibold mt-6 mb-4">Protocolos y Medidas</h2>
            <p>Incluyen: intervenciones pedagógicas, actas, conciliaciones, resoluciones rectorales y remisiones a autoridades.</p>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="debido_proceso">
          <ScrollArea className="h-[500px] p-4 border rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Elementos del Debido Proceso</h2>
            <ul className="list-decimal ml-5 space-y-1">
              {[...Array(12)].map((_, i) => <li key={i}>Elemento {i + 1} del debido proceso.</li>)}
            </ul>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="estimulos">
          <ScrollArea className="h-[500px] p-4 border rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Estímulos a Estudiantes</h2>
            <ul className="list-disc ml-5 space-y-1">
              <li>Cuadro de Honor trimestral.</li>
              <li>Menciones de honor (Medalla plateada, dorada).</li>
              <li>Reconocimientos a líderes: resiliente, mediador, creativo, investigador, deportista.</li>
              <li>Registro oficial en hoja de vida.</li>
            </ul>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
}
