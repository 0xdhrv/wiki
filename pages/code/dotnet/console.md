# Making a .NET Console Application

> A Simple .NET Console Application that prints 'Hello, World!' on the Console

Check if everything ( .NET SDK) is installed correctly, by running the following command, if it's installed, it will return the following output:

```cmd
> dotnet

Usage: dotnet [options]
Usage: dotnet [path-to-application]

Options:
-h|--help         Display help.
--info            Display .NET information.
--list-sdks       Display the installed SDKs.
--list-runtimes   Display the installed runtimes.

path-to-application:
The path to an application .dll file to execute.
```

If everything works fine, you can continue with following steps or troubleshoot [here](https://dotnet.microsoft.com/learn/dotnet/hello-world-tutorial/install).

1. Creating console app by entering following command:

```cmd
> dotnet new console -o HelloWorldConsoleApp
```

2. After creating the application, enter into the `HelloWorldConsoleApp` directory by following command:

```cmd
> cd HelloWorldConsoleApp
```

3. Now, here you can open `Program.cs` to view and edit the code in the editor. The code will be as follows:

```csharp
using System;

namespace HelloWorldConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }
}
```

4. Running your application by entering the following command:

```cmd
> dotnet run
Hello, World!

```

That's it, you have created basic .NET application that prints Hello, World!

## Additional Code

> Similar to the Basic Application but it prints current System Time

Open or duplicate the existing project and edit file(s).

1. Open and edit `Program.cs`, with the following code:

```csharp
using System;

namespace myApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Console.WriteLine("The current time is " + DateTime.Now);
        }
    }
}
```

2. Running your application by entering the following command:

```cmd
> dotnet run
Hello World!
The current time is 21-01-2021 10:00:00

```

## References

- [Source Code](https://github.com/0xdhrv/dotnet/tree/main/HelloWorldConsoleApp)

