      // 切换主题模式
      function toggleDarkMode() {
        var container = document.querySelector('body');
        var darkModeButton = document.getElementById('darkModeButton');

        container.classList.toggle('dark-mode');

        if (container.classList.contains('dark-mode')) {
          darkModeButton.textContent = '切换至浅色模式';
          localStorage.setItem('theme', 'dark');
        } else {
          darkModeButton.textContent = '切换至深色模式';
          localStorage.setItem('theme', 'light');
        }
      }
	  
	  // 根据系统主题设置初始主题模式
      function setInitialTheme() {
        var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        var savedTheme = localStorage.getItem('theme');
        var container = document.querySelector('body');
        var darkModeButton = document.getElementById('darkModeButton');

        if (savedTheme === 'dark' || (savedTheme === null && systemTheme === 'dark')) {
          container.classList.add('dark-mode');
          darkModeButton.textContent = '切换至浅色模式';
        } else {
          container.classList.remove('dark-mode');
          darkModeButton.textContent = '切换至深色模式';
        }
      }
	  
	  // 检查并设置初始主题
	  setInitialTheme();

	  // 根据系统主题设置初始主题模式
	  function setInitialTheme1() {
		var isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
		var container = document.querySelector('body');
		var darkModeButton = document.getElementById('darkModeButton');

		if (isDarkMode) {
		  container.classList.add('dark-mode');
		  darkModeButton.textContent = '切换至浅色模式';
		  localStorage.setItem('theme', 'dark');
		} else {
		  container.classList.remove('dark-mode');
		  darkModeButton.textContent = '切换至深色模式';
		  localStorage.setItem('theme', 'light');
		}
	  }

	  // 检查并设置初始主题
	  setInitialTheme1();