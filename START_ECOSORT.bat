@echo off
TITLE EcoSort AI - System Launcher
COLOR 0A
cls

echo ==========================================================
echo           ECOSORT AI - SMART WASTE SYSTEM
echo ==========================================================
echo.

:: Check for existing process on port 3000 and kill it
echo [STEP 0] Clearing any old server processes...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :3000 ^| findstr LISTENING') do (
    echo [INFO] Found process %%a on port 3000. Stopping it...
    taskkill /f /pid %%a >nul 2>&1
)

:: Extra precaution for node processes
taskkill /f /im node.exe >nul 2>&1

echo.
echo [STEP 1] Preparing Environment...
echo ----------------------------------------------------------
cd "waste-monitoring-system"

:: Option to clear cache if things are broken
if "%1"=="--clean" (
    echo [INFO] Clearing Next.js cache...
    rmdir /s /q .next >nul 2>&1
)

:: Install dependencies if node_modules is missing
if not exist "node_modules" (
    echo [INFO] Installing dependencies (First run only)...
    call npm.cmd install
)

:: Start the Next.js development server in a new window
echo [INFO] Starting the Server...
start "EcoSort Server (DO NOT CLOSE)" cmd /k "npm.cmd run dev || (echo. & echo [ERROR] Server failed to start. & pause)"

echo.
echo [STEP 2] Waiting for server to initialize...
echo ----------------------------------------------------------
echo (This may take a moment on the first run)

:: Wait loop to check if port 3000 is active
:WAIT_LOOP
<nul set /p "=. "
netstat -ano | findstr :3000 | findstr LISTENING >nul
if errorlevel 1 (
    timeout /t 2 /nobreak >nul
    goto WAIT_LOOP
)

:: Additional wait to allow Next.js to fully compile the home page
timeout /t 3 /nobreak >nul

echo.
echo.
echo [STEP 3] Launching Presentation & Dashboard...
echo ----------------------------------------------------------
cd ..

:: Open the Presentation
if exist PRESENTATION.html (
    start PRESENTATION.html
)

:: Open the Dashboard
if exist LIVE_DASHBOARD.html (
    start LIVE_DASHBOARD.html
)
start http://127.0.0.1:3000

echo.
echo ==========================================================
echo                 SYSTEM IS NOW LIVE!
echo ==========================================================
echo.
echo 1. The Presentation is open in your browser.
echo 2. The Dashboard (Live Demo) is also opening in a new tab.
echo 3. Keep the "EcoSort Server" window running in the background.
echo.
echo TIP: If the server is buggy, run: START_ECOSORT.bat --clean
echo.
pause

