import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

// 注册GSAP插件
gsap.registerPlugin(SplitText);

const SplitTextComponent = ({
  text,
  className = "",
  delay = 0,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "left",
  onLetterAnimationComplete,
  ...props
}) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current || !text) return;

    const element = textRef.current;
    
    // 创建SplitText实例
    const splitText = new SplitText(element, {
      type: splitType,
      charsClass: "char",
      wordsClass: "word",
      linesClass: "line"
    });

    // 获取分割后的元素
    const chars = splitText.chars || splitText.words || splitText.lines;
    
    if (!chars || chars.length === 0) return;

    // 设置初始状态
    gsap.set(chars, from);

    // 创建时间轴动画
    const tl = gsap.timeline({
      delay: delay / 1000, // 转换毫秒为秒
      onComplete: onLetterAnimationComplete
    });

    // 添加动画
    tl.to(chars, {
      ...to,
      duration: duration,
      ease: ease,
      stagger: 0.14 // 每个字符之间的延迟 (140ms)
    });

    // 清理函数
    return () => {
      if (splitText) {
        splitText.revert();
      }
    };
  }, [text, delay, duration, ease, splitType, from, to, onLetterAnimationComplete]);

  return (
    <div 
      ref={textRef}
      className={className}
      style={{ textAlign }}
      {...props}
    >
      {text}
    </div>
  );
};

export default SplitTextComponent;
