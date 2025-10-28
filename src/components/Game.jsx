import { useState, useEffect, useRef, useCallback } from 'react';

const Game = () => {
  const canvasRef = useRef(null);
  const gameLoopRef = useRef(null);
  const [gameState, setGameState] = useState('menu'); // menu, playing, gameOver
  const [score, setScore] = useState(0);
  const [finalScore, setFinalScore] = useState(0);
  
  // 游戏状态
  const [difficulty, setDifficulty] = useState('easy'); // easy, medium, hard
  const gameStateRef = useRef({
    player: { x: 400, y: 300, size: 20 },
    enemies: [],
    keys: {},
    lastTime: 0,
    enemySpawnTimer: 0,
    enemySpeed: 1,
    score: 0
  });

  // 地图尺寸
  const MAP_WIDTH = 800;
  const MAP_HEIGHT = 600;
  const BORDER_SIZE = 5;

  // 键盘事件处理
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      if (['w', 'a', 's', 'd'].includes(key)) {
        gameStateRef.current.keys[key] = true;
      }
      if (key === ' ') {
        e.preventDefault();
        if (gameState === 'menu') {
          startGame();
        } else if (gameState === 'gameOver') {
          resetGame();
        }
      }
    };

    const handleKeyUp = (e) => {
      const key = e.key.toLowerCase();
      if (['w', 'a', 's', 'd'].includes(key)) {
        gameStateRef.current.keys[key] = false;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [gameState]);

  // 开始游戏
  const startGame = () => {
    setGameState('playing');
    gameStateRef.current = {
      player: { x: 400, y: 300, size: 20 },
      enemies: [],
      keys: {},
      lastTime: performance.now(),
      enemySpawnTimer: 0,
      enemySpeed: 1,
      score: 0
    };
    setScore(0);
  };

  // 重置游戏
  const resetGame = () => {
    setGameState('menu');
    setFinalScore(0);
  };

  // 生成敌人
  const spawnEnemy = useCallback(() => {
    const side = Math.floor(Math.random() * 4);
    let x, y;
    
    switch (side) {
      case 0: // 上边
        x = Math.random() * MAP_WIDTH;
        y = -20;
        break;
      case 1: // 右边
        x = MAP_WIDTH + 20;
        y = Math.random() * MAP_HEIGHT;
        break;
      case 2: // 下边
        x = Math.random() * MAP_WIDTH;
        y = MAP_HEIGHT + 20;
        break;
      case 3: // 左边
        x = -20;
        y = Math.random() * MAP_HEIGHT;
        break;
    }
    
    gameStateRef.current.enemies.push({
      x,
      y,
      size: 15,
      vx: 0,
      vy: 0,
      targetX: gameStateRef.current.player.x,
      targetY: gameStateRef.current.player.y,
      type: 'normal'
    });
  }, []);

  // 生成闪烁敌人（困难模式）
  const spawnFlashEnemy = useCallback(() => {
    const side = Math.floor(Math.random() * 4);
    let x, y;
    
    switch (side) {
      case 0: // 上边
        x = Math.random() * MAP_WIDTH;
        y = -20;
        break;
      case 1: // 右边
        x = MAP_WIDTH + 20;
        y = Math.random() * MAP_HEIGHT;
        break;
      case 2: // 下边
        x = Math.random() * MAP_WIDTH;
        y = MAP_HEIGHT + 20;
        break;
      case 3: // 左边
        x = -20;
        y = Math.random() * MAP_HEIGHT;
        break;
    }
    
    gameStateRef.current.enemies.push({
      x,
      y,
      size: 15,
      vx: 0,
      vy: 0,
      targetX: gameStateRef.current.player.x,
      targetY: gameStateRef.current.player.y,
      type: 'flash',
      flashTimer: 0,
      isFlashing: true,
      flashPhase: 0
    });
  }, []);

  // 更新敌人AI
  const updateEnemyAI = useCallback((enemy, deltaTime) => {
    if (enemy.type === 'flash') {
      // 闪烁敌人逻辑
      enemy.flashTimer += deltaTime;
      
      if (enemy.isFlashing) {
        // 闪烁阶段
        enemy.flashPhase += deltaTime / 200; // 闪烁速度
        if (enemy.flashTimer >= 2000) { // 2秒后停止闪烁
          enemy.isFlashing = false;
          enemy.flashTimer = 0;
          // 记录玩家位置并开始冲刺
          enemy.targetX = gameStateRef.current.player.x;
          enemy.targetY = gameStateRef.current.player.y;
        }
      }
      
      if (!enemy.isFlashing) {
        // 冲刺阶段
        const targetDx = enemy.targetX - enemy.x;
        const targetDy = enemy.targetY - enemy.y;
        const targetDistance = Math.sqrt(targetDx * targetDx + targetDy * targetDy);
        
        if (targetDistance > 0) {
          enemy.vx = (targetDx / targetDistance) * gameStateRef.current.enemySpeed * 5;
          enemy.vy = (targetDy / targetDistance) * gameStateRef.current.enemySpeed * 5;
        }
      }
    } else {
      // 普通敌人逻辑
      const dx = gameStateRef.current.player.x - enemy.x;
      const dy = gameStateRef.current.player.y - enemy.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance > 0) {
        // 更新目标位置（有一定延迟）
        enemy.targetX = gameStateRef.current.player.x;
        enemy.targetY = gameStateRef.current.player.y;
        
        // 计算朝向目标的方向
        const targetDx = enemy.targetX - enemy.x;
        const targetDy = enemy.targetY - enemy.y;
        const targetDistance = Math.sqrt(targetDx * targetDx + targetDy * targetDy);
        
        if (targetDistance > 0) {
          enemy.vx = (targetDx / targetDistance) * gameStateRef.current.enemySpeed;
          enemy.vy = (targetDy / targetDistance) * gameStateRef.current.enemySpeed;
        }
      }
    }
  }, []);

  // 碰撞检测
  const checkCollisions = useCallback(() => {
    const player = gameStateRef.current.player;
    
    // 检查边界碰撞
    if (player.x - player.size/2 < BORDER_SIZE || 
        player.x + player.size/2 > MAP_WIDTH - BORDER_SIZE ||
        player.y - player.size/2 < BORDER_SIZE || 
        player.y + player.size/2 > MAP_HEIGHT - BORDER_SIZE) {
      gameOver();
      return;
    }
    
    // 检查敌人碰撞
    for (let enemy of gameStateRef.current.enemies) {
      const dx = player.x - enemy.x;
      const dy = player.y - enemy.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < (player.size + enemy.size) / 2) {
        gameOver();
        return;
      }
    }
  }, []);

  // 游戏结束
  const gameOver = () => {
    setGameState('gameOver');
    setFinalScore(gameStateRef.current.score);
    if (gameLoopRef.current) {
      cancelAnimationFrame(gameLoopRef.current);
    }
  };

  // 游戏主循环
  const gameLoop = useCallback((currentTime) => {
    if (gameState !== 'playing') return;
    
    const deltaTime = currentTime - gameStateRef.current.lastTime;
    gameStateRef.current.lastTime = currentTime;
    
    // 更新玩家位置
    const player = gameStateRef.current.player;
    const speed = 3;
    
    if (gameStateRef.current.keys['w']) player.y -= speed;
    if (gameStateRef.current.keys['s']) player.y += speed;
    if (gameStateRef.current.keys['a']) player.x -= speed;
    if (gameStateRef.current.keys['d']) player.x += speed;
    
    // 生成敌人
    gameStateRef.current.enemySpawnTimer += deltaTime;
    
    // 根据难度调整生成频率和数量
    let spawnInterval = 1000;
    let spawnCount = 1;
    
    switch (difficulty) {
      case 'easy':
        spawnInterval = 1000;
        spawnCount = 1;
        break;
      case 'medium':
        spawnInterval = 800;
        spawnCount = 1;
        break;
      case 'hard':
        spawnInterval = 600;
        spawnCount = 1;
        break;
    }
    
    if (gameStateRef.current.enemySpawnTimer > spawnInterval) {
      // 生成普通敌人
      for (let i = 0; i < spawnCount; i++) {
        spawnEnemy();
      }
      
      // 困难模式下偶尔生成闪烁敌人
      if (difficulty === 'hard' && Math.random() < 0.3) {
        spawnFlashEnemy();
      }
      
      gameStateRef.current.enemySpawnTimer = 0;
    }
    
  // 更新敌人
  gameStateRef.current.enemies = gameStateRef.current.enemies.filter(enemy => {
    // 更新敌人AI
    updateEnemyAI(enemy, deltaTime);
    
    // 更新敌人位置
    enemy.x += enemy.vx;
    enemy.y += enemy.vy;
    
    // 检查闪烁敌人是否到达目标位置
    if (enemy.type === 'flash' && !enemy.isFlashing) {
      const targetDx = enemy.targetX - enemy.x;
      const targetDy = enemy.targetY - enemy.y;
      const targetDistance = Math.sqrt(targetDx * targetDx + targetDy * targetDy);
      
      if (targetDistance < 10) {
        // 橙色方块到达目标位置后消失
        return false;
      }
    }
    
    // 检查与其他敌人的碰撞
    for (let otherEnemy of gameStateRef.current.enemies) {
      if (enemy !== otherEnemy) {
        const dx = enemy.x - otherEnemy.x;
        const dy = enemy.y - otherEnemy.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < (enemy.size + otherEnemy.size) / 2) {
          // 两个敌人碰撞，都消失
          return false;
        }
      }
    }
    
    // 移除超出地图太远的敌人
    return !(enemy.x < -50 || enemy.x > MAP_WIDTH + 50 || 
             enemy.y < -50 || enemy.y > MAP_HEIGHT + 50);
  });
    
    // 增加敌人速度
    gameStateRef.current.enemySpeed = Math.min(2.5, 1 + gameStateRef.current.score / 10000);
    
    // 更新分数
    gameStateRef.current.score += deltaTime / 10;
    setScore(Math.floor(gameStateRef.current.score));
    
    // 检查碰撞
    checkCollisions();
    
    // 渲染
    render();
    
    gameLoopRef.current = requestAnimationFrame(gameLoop);
  }, [gameState, spawnEnemy, updateEnemyAI, checkCollisions]);

  // 渲染函数
  const render = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, MAP_WIDTH, MAP_HEIGHT);
    
    // 绘制背景 - 深色网格图案
    ctx.fillStyle = '#0f0f0f';
    ctx.fillRect(0, 0, MAP_WIDTH, MAP_HEIGHT);
    
    // 绘制网格线
    ctx.strokeStyle = '#1a1a1a';
    ctx.lineWidth = 1;
    for (let x = 0; x < MAP_WIDTH; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, MAP_HEIGHT);
      ctx.stroke();
    }
    for (let y = 0; y < MAP_HEIGHT; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(MAP_WIDTH, y);
      ctx.stroke();
    }
    
    // 绘制边界 - 细边框
    ctx.fillStyle = '#444';
    ctx.fillRect(0, 0, MAP_WIDTH, BORDER_SIZE);
    ctx.fillRect(0, 0, BORDER_SIZE, MAP_HEIGHT);
    ctx.fillRect(MAP_WIDTH - BORDER_SIZE, 0, BORDER_SIZE, MAP_HEIGHT);
    ctx.fillRect(0, MAP_HEIGHT - BORDER_SIZE, MAP_WIDTH, BORDER_SIZE);
    
    // 绘制玩家
    ctx.fillStyle = '#00ff88';
    ctx.fillRect(
      gameStateRef.current.player.x - gameStateRef.current.player.size/2,
      gameStateRef.current.player.y - gameStateRef.current.player.size/2,
      gameStateRef.current.player.size,
      gameStateRef.current.player.size
    );
    
    // 绘制敌人
    for (let enemy of gameStateRef.current.enemies) {
      if (enemy.type === 'flash' && enemy.isFlashing) {
        // 闪烁敌人显示
        const alpha = Math.sin(enemy.flashPhase) * 0.5 + 0.5;
        ctx.fillStyle = `rgba(255, 0, 0, ${alpha})`;
      } else if (enemy.type === 'flash') {
        // 冲刺阶段的闪烁敌人
        ctx.fillStyle = '#ff8800';
      } else {
        // 普通敌人
        ctx.fillStyle = '#ff0000';
      }
      
      ctx.fillRect(
        enemy.x - enemy.size/2,
        enemy.y - enemy.size/2,
        enemy.size,
        enemy.size
      );
    }
  }, []);

  // 开始游戏循环
  useEffect(() => {
    if (gameState === 'playing') {
      gameStateRef.current.lastTime = performance.now();
      gameLoopRef.current = requestAnimationFrame(gameLoop);
    }
    
    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
    };
  }, [gameState, gameLoop]);

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(180deg, var(--color-dark) 0%, var(--color-surface) 100%)' }}>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8" style={{ color: 'var(--color-primary)' }}>躲避游戏</h1>
        
        {gameState === 'menu' && (
          <div className="mb-8">
            <p className="text-lg mb-4" style={{ color: 'var(--color-light)' }}>使用 WASD 键移动，躲避红色方块</p>
            
            <div className="mb-6">
              <p className="text-sm mb-3" style={{ color: 'var(--color-light)' }}>选择难度：</p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => setDifficulty('easy')}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    difficulty === 'easy' 
                      ? 'bg-[var(--color-primary)] text-[var(--color-dark)]' 
                      : 'bg-[color:var(--color-surface)] text-[var(--color-light)] hover:bg-[color:var(--color-dark)]'
                  }`}
                >
                  简单
                </button>
                <button
                  onClick={() => setDifficulty('medium')}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    difficulty === 'medium' 
                      ? 'bg-[var(--color-primary)] text-[var(--color-dark)]' 
                      : 'bg-[color:var(--color-surface)] text-[var(--color-light)] hover:bg-[color:var(--color-dark)]'
                  }`}
                >
                  中等
                </button>
                <button
                  onClick={() => setDifficulty('hard')}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    difficulty === 'hard' 
                      ? 'bg-[var(--color-primary)] text-[var(--color-dark)]' 
                      : 'bg-[color:var(--color-surface)] text-[var(--color-light)] hover:bg-[color:var(--color-dark)]'
                  }`}
                >
                  困难
                </button>
              </div>
            </div>
            
            <p className="mb-6" style={{ color: 'var(--color-light)' }}>按空格键开始游戏</p>
            <button
              onClick={startGame}
              className="font-bold py-3 px-8 rounded-lg transition-colors"
              style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-dark)' }}
            >
              开始游戏
            </button>
          </div>
        )}
        
        {gameState === 'playing' && (
          <div className="mb-4">
            <div className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
              分数: {score}
            </div>
            <p className="text-sm" style={{ color: 'var(--color-light)' }}>按空格键暂停</p>
          </div>
        )}
        
        {gameState === 'gameOver' && (
          <div className="mb-8">
            <div className="text-3xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
              游戏结束！
            </div>
            <div className="text-xl mb-6" style={{ color: 'var(--color-light)' }}>
              最终分数: {Math.floor(finalScore)}
            </div>
            <button
              onClick={resetGame}
              className="font-bold py-3 px-8 rounded-lg transition-colors"
              style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-dark)' }}
            >
              重新开始
            </button>
          </div>
        )}
        
        <canvas
          ref={canvasRef}
          width={MAP_WIDTH}
          height={MAP_HEIGHT}
          className="border-2"
          style={{ borderColor: 'var(--color-muted)', backgroundColor: 'var(--color-dark)', imageRendering: 'pixelated' }}
        />
        
        
        <div className="mt-8">
          <button
            onClick={() => window.history.back()}
            className="font-bold py-2 px-6 rounded-lg transition-colors"
            style={{ backgroundColor: 'var(--color-surface)', color: 'var(--color-light)' }}
          >
            返回首页
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game;
