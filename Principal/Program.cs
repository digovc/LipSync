namespace LipSync
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            new AppLs().inicializarServidor();

            System.Console.Read();
        }
    }
}