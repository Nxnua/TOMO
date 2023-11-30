<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Томо</title>

    @viteReactRefresh
     @vite(['resources/css/app.css', 'resources/js/main.jsx'])
    <script>
        localStorage.theme === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) ?
            document.documentElement.classList.add('dark') :
            document.documentElement.classList.remove('dark');
    </script>
</head>

<body>
    <div id="app" class="dark:bg-darkbg dark:text-gray-300"></div>

</body>

</html>
