# Making a ASP.NET Basic Application

> A Simple ASP.NET Application that prints 'Hello, World!' on the Web

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

If everything works fine, you can continue with following steps or troubleshoot [here](https://dotnet.microsoft.com/learn/aspnet/hello-world-tutorial/install).

1. Creating web app by entering following command:

```cmd
> dotnet new webApp -o HelloWorldWebApp --no-https
```

2. After creating the application, enter into the `HelloWorldWebApp` directory by following command:

```cmd
> cd HelloWorldWebApp
```

3. Running your application by entering the following command:

```cmd
> dotnet run
info: Microsoft.Hosting.Lifetime[0]
      Now listening on: http://localhost:5000
info: Microsoft.Hosting.Lifetime[0]
      Application started. Press Ctrl+C to shut down.
info: Microsoft.Hosting.Lifetime[0]
      Hosting environment: Development
info: Microsoft.Hosting.Lifetime[0]
```
It will return following output: on [http://localhost:5000](http://localhost:5000)

![](/images/hello-world-web-app.png)

That's it, you have built your ASP.NET application.

4. Now, here you can open `Pages/Index.cshtml` to view and edit the code in the editor. The code will be as follows:

```cshtml
@page
@model IndexModel
@{
    ViewData["Title"] = "Home page";
}

<div class="text-center">
    <h1 class="display-4">Welcome</h1>
    <p>Learn about <a href="https://docs.microsoft.com/aspnet/core">building Web apps with ASP.NET Core</a>.</p>
</div>
```

And, edit it with following code to display Hello, World and show server time:

```cshtml
@page
@model IndexModel
@{
    ViewData["Title"] = "Home page";
}

<div class="text-center">
    <h1>Hello, World!</h1>
    <p>The time on the server is @DateTime.Now</p>
</div>
```

5. Re-running your application by entering the following command:

```cmd
> dotnet run
info: Microsoft.Hosting.Lifetime[0]
      Now listening on: http://localhost:5000
info: Microsoft.Hosting.Lifetime[0]
      Application started. Press Ctrl+C to shut down.
info: Microsoft.Hosting.Lifetime[0]
      Hosting environment: Development
info: Microsoft.Hosting.Lifetime[0]
```
It will return following output: on [http://localhost:5000](http://localhost:5000)

![](/images/hello-world-web-app-time.png)

That's it, you have created basic ASP.NET application that diplayss Hello, World! and server time.

## References

- [Source Code](https://github.com/0xdhrv/aspdotnet/tree/main/HelloWorldWebApp)