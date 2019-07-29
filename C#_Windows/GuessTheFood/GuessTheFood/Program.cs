using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GuessTheFood
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] food = {"Pizza","Pasta","Salmon","Steak","Miso"};
            Console.WriteLine("Foods available :");
            for(int i=0;i<food.Length;i++)
            Console.WriteLine("Enter {0} to choose {1} ",i,food[i]);
            Console.WriteLine("Guess the food I have chosen: ");
            Random rnd = new Random();
            int index = rnd.Next(food.Length);


            for (int j = 0; j < 3; j++)
            {
                try
                {
                    int g = Convert.ToInt32(Console.ReadLine());
                    if (g < 0 || g >= food.Length)
                        Console.WriteLine("please enter integer between 0 and 4.");
                    else
                        if (g == index)
                    {
                        Console.WriteLine("Congratulations! Correct! It is {0}!", food[index]);
                        break;
                    }
                    else
                        Console.WriteLine("Failure");

                }
                catch (Exception ee)
                {
                        Console.WriteLine(ee.Message);
                }
                Console.WriteLine("Chance left: {0}",2-j);
            }
            Console.WriteLine("\nGame over, See you.");
            Console.ReadLine();
        }
    }
}
