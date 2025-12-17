import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [consoleLines] = useState([
    "[01:12:43 INFO] [ishaaaan]: Interface biscuit.host initialized (471 ms)",
    "[01:12:43 INFO] [ishaaaan]: Starting Keystone version 2.1.8-b",
    "[01:12:45 INFO] [ishaaaan]: Upstream pagination inspector detected",
    "[01:12:45 INFO] [ishaaaan]: Upstream repository: ******************* is the config to use per this prerequisite.",
    "[01:12:45 INFO] [ishaaaan]: Loading cache connections: hashmap",
    "[01:12:45 INFO] [ishaaaan]: Applying configuration...",
    "[01:12:46 INFO] [ishaaaan]: Console online 2.6.5.290 (git:master~c3fd0e)",
    "[01:12:46 INFO] [ishaaaan]: Install...",
    "[01:12:46 INFO] [ishaaaan]: ********************************************",
    "[01:12:46 INFO] [ishaaaan]: ********************************************",
    "[01:12:46 INFO] [ishaaaan]: ********************************************",
    "[01:12:51 INFO] [ishaaaan]: Bootstrap OK",
    "[01:12:51 INFO] [ishaaaan]: Reading core 1.2 packages...",
    "[01:12:51 INFO] [ishaaaan]: Access: github.com/BiscuitServer/BiscuitServe/src/banan/Banklist.txt.4.4/BiscuitServe.jar",
    "[01:12:51 INFO] [spawn]: Loaded resource package: files (https://biscuit.mc.com/s/4kRy5LS13eCaC7p4.ng",
    "[01:12:51 INFO] [spawn]: Started Keystone server on *:8800",
    "[01:12:51 INFO] [spawn]: Done (2.984s)! Support BunGeE version 1.3.18, checkout it here: https://geyser.org/download",
    "[01:12:51 INFO] [spawn]: Note: 13 mixin config files are present.",
  ]);

  const servers = [
    { name: "BisqVelocity", ip: "5.61.192.207:25567", cpu: "0.58%", ram: "0.00%" },
  ];

  const resources = [
    { title: "Использование Процессора", value: "0.58% / 0.00%", icon: "Cpu" },
    { title: "Использование Памяти", value: "706.43 MiB / 2 GiB", icon: "HardDrive" },
    { title: "Использование Диска", value: "174.17 MiB / 2 GiB", icon: "Database" },
    { title: "Входящий / Исходящий", value: "1.09 MiB / 177.1 KiB", icon: "Activity" },
  ];

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <nav className="bg-[#0f0f0f] border-b border-gray-800 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center">
                <span className="text-white font-bold">Б</span>
              </div>
              <span className="text-lg font-bold">Bisquit.Host</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <Icon name="Bell" size={18} />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <Icon name="Settings" size={18} />
            </Button>
          </div>
        </div>
      </nav>

      <div className="flex">
        <aside className="w-64 bg-[#0f0f0f] border-r border-gray-800 min-h-screen p-4">
          <div className="space-y-2">
            <div className="text-xs text-gray-500 uppercase font-semibold px-3 py-2">
              Основное
            </div>
            <Button
              variant="ghost"
              className="w-full justify-start bg-[#2a2a2a] text-white hover:bg-[#333]"
            >
              <Icon name="Monitor" size={18} className="mr-3" />
              Обзор
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white hover:bg-[#2a2a2a]">
              <Icon name="Terminal" size={18} className="mr-3" />
              Консоль
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white hover:bg-[#2a2a2a]">
              <Icon name="FolderOpen" size={18} className="mr-3" />
              Файл-графия
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white hover:bg-[#2a2a2a]">
              <Icon name="Database" size={18} className="mr-3" />
              База Данных
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white hover:bg-[#2a2a2a]">
              <Icon name="Calendar" size={18} className="mr-3" />
              Расписание
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white hover:bg-[#2a2a2a]">
              <Icon name="Users" size={18} className="mr-3" />
              Дога
            </Button>

            <div className="text-xs text-gray-500 uppercase font-semibold px-3 py-2 mt-6">
              Управление
            </div>
            <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white hover:bg-[#2a2a2a]">
              <Icon name="FileText" size={18} className="mr-3" />
              Файлы
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white hover:bg-[#2a2a2a]">
              <Icon name="Upload" size={18} className="mr-3" />
              Backups
            </Button>

            <div className="text-xs text-gray-500 uppercase font-semibold px-3 py-2 mt-6">
              MINECRAFT
            </div>
            <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white hover:bg-[#2a2a2a]">
              <Icon name="Settings" size={18} className="mr-3" />
              Конфигурации
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white hover:bg-[#2a2a2a]">
              <Icon name="Package" size={18} className="mr-3" />
              Версии
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white hover:bg-[#2a2a2a]">
              <Icon name="Wrench" size={18} className="mr-3" />
              Плагины
            </Button>

            <div className="pt-6 border-t border-gray-800 mt-6">
              <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white hover:bg-[#2a2a2a]">
                <Icon name="User" size={18} className="mr-3" />
                Аккаунт
              </Button>
            </div>
          </div>
        </aside>

        <main className="flex-1 p-6">
          <div className="mb-6">
            {servers.map((server, i) => (
              <Card key={i} className="bg-[#0f0f0f] border-gray-800 p-4 mb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-white mb-1">{server.name}</h2>
                    <p className="text-sm text-gray-400">{server.ip}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      <Icon name="Play" size={16} className="mr-2" />
                      Запустить
                    </Button>
                    <Button size="sm" variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                      <Icon name="RotateCw" size={16} className="mr-2" />
                      Перезапустить
                    </Button>
                    <Button size="sm" variant="outline" className="border-red-700 text-red-500 hover:bg-red-950">
                      <Icon name="Square" size={16} className="mr-2" />
                      Остановить
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Tabs defaultValue="console" className="w-full">
            <TabsList className="bg-[#0f0f0f] border-b border-gray-800 w-full justify-start rounded-none h-auto p-0">
              <TabsTrigger
                value="console"
                className="data-[state=active]:bg-[#2a2a2a] data-[state=active]:text-primary rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-6 py-3"
              >
                <Icon name="Terminal" size={16} className="mr-2" />
                Консоль
              </TabsTrigger>
              <TabsTrigger
                value="files"
                className="data-[state=active]:bg-[#2a2a2a] data-[state=active]:text-primary rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-6 py-3"
              >
                <Icon name="FolderOpen" size={16} className="mr-2" />
                Файловый менеджер
              </TabsTrigger>
            </TabsList>

            <TabsContent value="console" className="mt-0">
              <Card className="bg-[#0f0f0f] border-gray-800 overflow-hidden">
                <div className="grid grid-cols-4 gap-4 p-4 border-b border-gray-800">
                  {resources.map((res, i) => (
                    <div key={i} className="bg-[#1a1a1a] rounded-lg p-4 border border-gray-800">
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-xs text-gray-400">{res.title}</span>
                        <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center">
                          <Icon name={res.icon as any} size={20} className="text-primary" />
                        </div>
                      </div>
                      <div className="text-sm font-semibold text-white">{res.value}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-black p-4 font-mono text-xs text-green-400 h-[500px] overflow-y-auto">
                  {consoleLines.map((line, i) => (
                    <div key={i} className="mb-1 leading-relaxed">
                      {line}
                    </div>
                  ))}
                  <div className="flex items-center mt-4">
                    <span className="text-gray-500 mr-2">$</span>
                    <input
                      type="text"
                      placeholder="Введите команду..."
                      className="bg-transparent border-none outline-none flex-1 text-green-400"
                    />
                  </div>
                </div>

                <div className="bg-[#0f0f0f] p-3 border-t border-gray-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                      <Icon name="Download" size={16} />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                      <Icon name="Maximize2" size={16} />
                    </Button>
                  </div>
                </div>
              </Card>

              <div className="grid grid-cols-4 gap-4 mt-4">
                {resources.map((res, i) => (
                  <Card key={i} className="bg-[#0f0f0f] border-gray-800 p-4">
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-xs text-gray-400">{res.title}</span>
                      <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center">
                        <Icon name={res.icon as any} size={20} className="text-primary" />
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-white">{res.value}</div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="files" className="mt-0">
              <Card className="bg-[#0f0f0f] border-gray-800">
                <div className="p-4 border-b border-gray-800">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Icon name="Folder" size={16} />
                    <span>/home/container</span>
                  </div>
                </div>

                <div className="p-4">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-xs text-gray-500 border-b border-gray-800">
                        <th className="pb-3 font-medium">Название</th>
                        <th className="pb-3 font-medium">Размер</th>
                        <th className="pb-3 font-medium">Изменено</th>
                        <th className="pb-3 font-medium text-right">Действия</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: "config", type: "folder", size: "-", modified: "2 дня назад" },
                        { name: "plugins", type: "folder", size: "-", modified: "5 дней назад" },
                        { name: "world", type: "folder", size: "-", modified: "1 день назад" },
                        { name: "server.properties", type: "file", size: "1.2 KB", modified: "3 часа назад" },
                        { name: "server.jar", type: "file", size: "45.3 MB", modified: "1 неделю назад" },
                      ].map((item, i) => (
                        <tr key={i} className="border-b border-gray-800/50 hover:bg-[#1a1a1a] transition">
                          <td className="py-3">
                            <div className="flex items-center gap-3">
                              <Icon
                                name={item.type === "folder" ? "Folder" : "FileText"}
                                size={18}
                                className={item.type === "folder" ? "text-primary" : "text-gray-400"}
                              />
                              <span className="text-white">{item.name}</span>
                            </div>
                          </td>
                          <td className="py-3 text-gray-400 text-sm">{item.size}</td>
                          <td className="py-3 text-gray-400 text-sm">{item.modified}</td>
                          <td className="py-3 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-gray-400 hover:text-white">
                                <Icon name="Download" size={16} />
                              </Button>
                              <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-gray-400 hover:text-white">
                                <Icon name="Edit" size={16} />
                              </Button>
                              <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-red-400 hover:text-red-300">
                                <Icon name="Trash2" size={16} />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
