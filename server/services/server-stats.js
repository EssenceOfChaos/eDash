const os = require('os');

class ServerStats {
  constructor() { console.log('instantiating ServerStats class') }

  /**
   * Returns the operating system CPU architecture for which the Node.js binary was compiled.
   */
  architecture = os.arch();

  /**
   * Returns a string identifying the operating system platform.
   */
  platform = os.platform();

  /**
   * Returns the operating system name as returned by uname(3). For example, it returns 'Linux' on Linux, 'Darwin' on macOS, and 'Windows_NT' on Windows.
   */
  os = os.type();

  /**
   * Returns the host name of the operating system as a string.
   */
  hostname = os.hostname();

  /**
   * Returns the string path of the current user's home directory.
   */
  homedir = os.homedir();

  /**
   * Returns an array of objects containing information about each logical CPU core.
   */
  cpus = os.cpus();

  /**
   * Returns the total amount of system memory in bytes as an integer.
   */
  totalmem = os.totalmem();

  /**
   * Returns the amount of free system memory in bytes as an integer.
   */
  freemem = os.freemem();

  /**
   * Returns the system uptime in number of seconds.
   */
  uptime = os.uptime();

  /**
   * Returns an array containing the 1, 5, and 15 minute load averages.
   */
  loadavg = os.loadavg();
}

module.exports = new ServerStats();
