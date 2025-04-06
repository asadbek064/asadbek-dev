/**
 * Original Creator: https://www.shadertoy.com/user/negentrope
 * Ported to WebGL by Asadbek Karimov (me asadk.dev)
 */
//@ts-nocheck

'use client';

import { useEffect, useRef } from 'react';

const ShaderBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      console.error('WebGL not supported');
      return;
    }
    
    // set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl!.viewport(0, 0, canvas.width, canvas.height);
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    //  shader program
    const createShader = (gl: WebGLRenderingContext, type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      
      return shader;
    };
    
    const createProgram = (gl: WebGLRenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader) => {
      const program = gl.createProgram();
      if (!program) return null;
      
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
      
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Program linking error:', gl.getProgramInfoLog(program));
        gl.deleteProgram(program);
        return null;
      }
      
      return program;
    };
    
    // Shader source code
    const vertexShaderSource = `
      attribute vec2 a_position;
      
      void main() {
          gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;
    
    const fragmentShaderSource = `
      precision highp float;
      
      uniform vec2 u_resolution;
      uniform float u_time;
      
      #define NUM_OCTAVES 3
      
      float rand(vec2 n) { 
          return fract(sin(dot(n, vec2(12.9892, 4.1414))) * 43758.5450);
      }
      
      float noise(vec2 p){
          vec2 ip = floor(p);
          vec2 u = fract(p);
          u = u*u*(3.0-2.0*u);
          
          float res = mix(
              mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
              mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
          return res*res;
      }
      
      float fbm(vec2 x) {
          float v = 0.0;
          float a = 0.5;
          vec2 shift = vec2(100);    
          mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
          for (int i = 0; i < NUM_OCTAVES; ++i) {
              v += a * noise(x);
              x = rot * x * 2.0 + shift;
              a *= 0.5;
          }
          return v;
      }
      
      void main() {
          vec2 shake = vec2(sin(u_time * 1.5) * 0.01, cos(u_time * 2.7) * 0.01);
          
          vec2 p = ((gl_FragCoord.xy + shake * u_resolution) - u_resolution * 0.5) / u_resolution.y * mat2(10.0, -6.0, 6.0, 8.0);
          vec2 v;
          vec4 o = vec4(0.0);
          
          float f = 4.0 + fbm(p + vec2(u_time * 7.0, 0.0)); 
          
          for(float i = 0.0; i < 35.0; i++) {
              v = p + cos(i * i + (u_time + p.x * 0.1) * 0.03 + i * vec2(11.0, 9.0)) * 5.0 + vec2(sin(u_time * 4.0 + i) * 0.005, cos(u_time * 4.5 - i) * 0.005);
              
              float tailNoise = fbm(v + vec2(u_time, i)) * (1.0 - (i / 85.0)); 
              vec4 currentContribution = (cos(sin(i) * vec4(1.0, 2.0, 3.0, 1.0)) + 1.0) * exp(sin(i * i + u_time)) / length(max(v, vec2(v.x * f * 0.02, v.y)));
              
              float thinnessFactor = smoothstep(0.0, 1.0, i / 45.0); 
              o += currentContribution * (1.0 + tailNoise * 2.0) * thinnessFactor;
          }
          
          vec4 powered = pow(o / 1e2, vec4(1.5));
          vec4 e2x = exp(2.0 * powered);
          o = (e2x - 1.0) / (e2x + 1.0);  // tanh(x) = (e^(2x) - 1) / (e^(2x) + 1)
          gl_FragColor = o;
      }
    `;
    
    // compile shaders
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    
    if (!vertexShader || !fragmentShader) {
      return;
    }
    
    const program = createProgram(gl, vertexShader, fragmentShader);
    if (!program) {
      return;
    }
    
    gl.useProgram(program);
    
    // create a buffer for the rectangle that covers the canvas
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1.0, -1.0, // bottom left
         1.0, -1.0, // bottom right
        -1.0,  1.0, // top left
         1.0,  1.0, // top right
      ]),
      gl.STATIC_DRAW
    );
    
    // attribute
    const positionAttributeLocation = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);
    
    // uniforms
    const resolutionUniformLocation = gl.getUniformLocation(program, 'u_resolution');
    const timeUniformLocation = gl.getUniformLocation(program, 'u_time');
    
    // animation loop
    let startTime = Date.now();
    
    const render = () => {
      // update time uniform
      const currentTime = (Date.now() - startTime) / 2800;
      gl.uniform1f(timeUniformLocation, currentTime);
      
      gl.uniform2f(resolutionUniformLocation, canvas.width, canvas.height);
      
      // Draw
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      
      requestRef.current = requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      style={{
        display: 'block',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1
      }}
    />
  );
};

export default ShaderBackground;