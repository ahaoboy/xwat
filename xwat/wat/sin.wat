(module
   (memory (;0;) 17)
  (global (;0;) (mut i32) (i32.const 1048576))
  (export "memory" (memory 0))

 (func $sin  (param f32) (result f32)
    (local f64 f64 f64 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32)
    global.get 0
    i32.const 16
    i32.sub
    local.tee 13
    global.set 0
    local.get 0
    f64.promote_f32
    local.set 1
    block  ;; label = @1
      local.get 0
      i32.reinterpret_f32
      local.tee 16
      i32.const 2147483647
      i32.and
      local.tee 6
      i32.const 1061752795
      i32.ge_u
      if  ;; label = @2
        local.get 6
        i32.const 1081824210
        i32.ge_u
        if  ;; label = @3
          local.get 6
          i32.const 1088565718
          i32.ge_u
          if  ;; label = @4
            block  ;; label = @5
              block  ;; label = @6
                block  ;; label = @7
                  block  ;; label = @8
                    local.get 6
                    i32.const 2139095039
                    i32.le_u
                    if  ;; label = @9
                      local.get 13
                      i64.const 0
                      i64.store offset=8
                      block (result f64)  ;; label = @10
                        local.get 6
                        i32.const 1305022426
                        i32.le_u
                        if  ;; label = @11
                          local.get 1
                          f64.const 0x1.45f306dc9c883p-1 (;=0.63662;)
                          f64.mul
                          f64.const 0x1.8p+52 (;=6.7554e+15;)
                          f64.add
                          f64.const -0x1.8p+52 (;=-6.7554e+15;)
                          f64.add
                          local.tee 2
                          f64.const -0x1p+31 (;=-2.14748e+09;)
                          f64.ge
                          local.set 6
                          i32.const 2147483647
                          block (result i32)  ;; label = @12
                            local.get 2
                            f64.abs
                            f64.const 0x1p+31 (;=2.14748e+09;)
                            f64.lt
                            if  ;; label = @13
                              local.get 2
                              i32.trunc_f64_s
                              br 1 (;@12;)
                            end
                            i32.const -2147483648
                          end
                          i32.const -2147483648
                          local.get 6
                          select
                          local.get 2
                          f64.const 0x1.fffffffcp+30 (;=2.14748e+09;)
                          f64.gt
                          select
                          i32.const 0
                          local.get 2
                          local.get 2
                          f64.eq
                          select
                          local.set 6
                          local.get 1
                          local.get 2
                          f64.const -0x1.921fb5p+0 (;=-1.5708;)
                          f64.mul
                          f64.add
                          local.get 2
                          f64.const -0x1.110b4611a6263p-26 (;=-1.58933e-08;)
                          f64.mul
                          f64.add
                          br 1 (;@10;)
                        end
                        local.get 13
                        local.get 6
                        local.get 6
                        i32.const 23
                        i32.shr_u
                        i32.const 150
                        i32.sub
                        local.tee 11
                        i32.const 23
                        i32.shl
                        i32.sub
                        f32.reinterpret_i32
                        f64.promote_f32
                        f64.store
                        local.get 13
                        i32.const 8
                        i32.add
                        global.get 0
                        i32.const 560
                        i32.sub
                        local.tee 4
                        global.set 0
                        local.get 4
                        i64.const 0
                        i64.store offset=152
                        local.get 4
                        i64.const 0
                        i64.store offset=144
                        local.get 4
                        i64.const 0
                        i64.store offset=136
                        local.get 4
                        i64.const 0
                        i64.store offset=128
                        local.get 4
                        i64.const 0
                        i64.store offset=120
                        local.get 4
                        i64.const 0
                        i64.store offset=112
                        local.get 4
                        i64.const 0
                        i64.store offset=104
                        local.get 4
                        i64.const 0
                        i64.store offset=96
                        local.get 4
                        i64.const 0
                        i64.store offset=88
                        local.get 4
                        i64.const 0
                        i64.store offset=80
                        local.get 4
                        i64.const 0
                        i64.store offset=72
                        local.get 4
                        i64.const 0
                        i64.store offset=64
                        local.get 4
                        i64.const 0
                        i64.store offset=56
                        local.get 4
                        i64.const 0
                        i64.store offset=48
                        local.get 4
                        i64.const 0
                        i64.store offset=40
                        local.get 4
                        i64.const 0
                        i64.store offset=32
                        local.get 4
                        i64.const 0
                        i64.store offset=24
                        local.get 4
                        i64.const 0
                        i64.store offset=16
                        local.get 4
                        i64.const 0
                        i64.store offset=8
                        local.get 4
                        i64.const 0
                        i64.store
                        local.get 4
                        i64.const 0
                        i64.store offset=312
                        local.get 4
                        i64.const 0
                        i64.store offset=304
                        local.get 4
                        i64.const 0
                        i64.store offset=296
                        local.get 4
                        i64.const 0
                        i64.store offset=288
                        local.get 4
                        i64.const 0
                        i64.store offset=280
                        local.get 4
                        i64.const 0
                        i64.store offset=272
                        local.get 4
                        i64.const 0
                        i64.store offset=264
                        local.get 4
                        i64.const 0
                        i64.store offset=256
                        local.get 4
                        i64.const 0
                        i64.store offset=248
                        local.get 4
                        i64.const 0
                        i64.store offset=240
                        local.get 4
                        i64.const 0
                        i64.store offset=232
                        local.get 4
                        i64.const 0
                        i64.store offset=224
                        local.get 4
                        i64.const 0
                        i64.store offset=216
                        local.get 4
                        i64.const 0
                        i64.store offset=208
                        local.get 4
                        i64.const 0
                        i64.store offset=200
                        local.get 4
                        i64.const 0
                        i64.store offset=192
                        local.get 4
                        i64.const 0
                        i64.store offset=184
                        local.get 4
                        i64.const 0
                        i64.store offset=176
                        local.get 4
                        i64.const 0
                        i64.store offset=168
                        local.get 4
                        i64.const 0
                        i64.store offset=160
                        local.get 4
                        i64.const 0
                        i64.store offset=472
                        local.get 4
                        i64.const 0
                        i64.store offset=464
                        local.get 4
                        i64.const 0
                        i64.store offset=456
                        local.get 4
                        i64.const 0
                        i64.store offset=448
                        local.get 4
                        i64.const 0
                        i64.store offset=440
                        local.get 4
                        i64.const 0
                        i64.store offset=432
                        local.get 4
                        i64.const 0
                        i64.store offset=424
                        local.get 4
                        i64.const 0
                        i64.store offset=416
                        local.get 4
                        i64.const 0
                        i64.store offset=408
                        local.get 4
                        i64.const 0
                        i64.store offset=400
                        local.get 4
                        i64.const 0
                        i64.store offset=392
                        local.get 4
                        i64.const 0
                        i64.store offset=384
                        local.get 4
                        i64.const 0
                        i64.store offset=376
                        local.get 4
                        i64.const 0
                        i64.store offset=368
                        local.get 4
                        i64.const 0
                        i64.store offset=360
                        local.get 4
                        i64.const 0
                        i64.store offset=352
                        local.get 4
                        i64.const 0
                        i64.store offset=344
                        local.get 4
                        i64.const 0
                        i64.store offset=336
                        local.get 4
                        i64.const 0
                        i64.store offset=328
                        local.get 4
                        i64.const 0
                        i64.store offset=320
                        i32.const 0
                        local.get 4
                        i32.const 480
                        i32.add
                        local.tee 6
                        i32.sub
                        i32.const 3
                        i32.and
                        local.tee 12
                        local.get 6
                        i32.add
                        local.set 5
                        local.get 12
                        if  ;; label = @11
                          loop  ;; label = @12
                            local.get 6
                            i32.const 0
                            i32.store8
                            local.get 6
                            i32.const 1
                            i32.add
                            local.tee 6
                            local.get 5
                            i32.lt_u
                            br_if 0 (;@12;)
                          end
                        end
                        local.get 5
                        i32.const 80
                        local.get 12
                        i32.sub
                        local.tee 12
                        i32.const -4
                        i32.and
                        local.tee 14
                        i32.add
                        local.set 6
                        local.get 14
                        i32.const 0
                        i32.gt_s
                        if  ;; label = @11
                          loop  ;; label = @12
                            local.get 5
                            i32.const 0
                            i32.store
                            local.get 5
                            i32.const 4
                            i32.add
                            local.tee 5
                            local.get 6
                            i32.lt_u
                            br_if 0 (;@12;)
                          end
                        end
                        local.get 12
                        i32.const 3
                        i32.and
                        local.tee 5
                        if  ;; label = @11
                          local.get 5
                          local.get 6
                          i32.add
                          local.set 5
                          loop  ;; label = @12
                            local.get 6
                            i32.const 0
                            i32.store8
                            local.get 6
                            i32.const 1
                            i32.add
                            local.tee 6
                            local.get 5
                            i32.lt_u
                            br_if 0 (;@12;)
                          end
                        end
                        i32.const 1049324
                        i32.load
                        local.tee 12
                        local.set 6
                        local.get 11
                        i32.const 3
                        i32.sub
                        i32.const 24
                        i32.div_s
                        local.tee 5
                        i32.const 0
                        local.get 5
                        i32.const 0
                        i32.gt_s
                        select
                        local.tee 17
                        local.set 5
                        local.get 17
                        i32.const 2
                        i32.shl
                        i32.const 1049340
                        i32.add
                        local.set 10
                        loop  ;; label = @11
                          local.get 4
                          local.get 7
                          i32.const 3
                          i32.shl
                          i32.add
                          local.get 5
                          i32.const 0
                          i32.lt_s
                          if (result f64)  ;; label = @12
                            f64.const 0x0p+0 (;=0;)
                          else
                            local.get 10
                            i32.load
                            f64.convert_i32_s
                          end
                          f64.store
                          local.get 6
                          local.get 7
                          i32.gt_u
                          if  ;; label = @12
                            local.get 10
                            i32.const 4
                            i32.add
                            local.set 10
                            local.get 5
                            i32.const 1
                            i32.add
                            local.set 5
                            local.get 7
                            local.get 6
                            local.get 7
                            i32.gt_u
                            i32.add
                            local.tee 7
                            local.get 6
                            i32.le_u
                            br_if 1 (;@11;)
                          end
                        end
                        local.get 11
                        i32.const 24
                        i32.sub
                        local.set 6
                        i32.const 0
                        local.set 5
                        loop  ;; label = @11
                          local.get 5
                          i32.const 3
                          i32.shl
                          local.tee 7
                          local.get 4
                          i32.const 320
                          i32.add
                          i32.add
                          local.get 13
                          f64.load
                          local.get 4
                          local.get 7
                          i32.add
                          f64.load
                          f64.mul
                          f64.const 0x0p+0 (;=0;)
                          f64.add
                          f64.store
                          local.get 5
                          local.get 12
                          i32.lt_u
                          if  ;; label = @12
                            local.get 5
                            local.get 12
                            i32.lt_u
                            local.get 5
                            i32.add
                            local.tee 5
                            local.get 12
                            i32.le_u
                            br_if 1 (;@11;)
                          end
                        end
                        f64.const inf (;=inf;)
                        f64.const 0x1p+1023 (;=8.98847e+307;)
                        local.get 6
                        local.get 17
                        i32.const -24
                        i32.mul
                        local.tee 27
                        i32.add
                        local.tee 8
                        i32.const 2046
                        i32.gt_u
                        local.tee 21
                        select
                        f64.const 0x0p+0 (;=0;)
                        f64.const 0x1p-969 (;=2.00417e-292;)
                        local.get 8
                        i32.const -1991
                        i32.lt_u
                        local.tee 22
                        select
                        f64.const 0x1p+0 (;=1;)
                        local.get 8
                        i32.const -1022
                        i32.lt_s
                        local.tee 23
                        select
                        local.get 8
                        i32.const 1023
                        i32.gt_s
                        local.tee 24
                        select
                        i32.const 3069
                        local.get 8
                        local.get 8
                        i32.const 3069
                        i32.ge_s
                        select
                        i32.const 2046
                        i32.sub
                        local.get 8
                        i32.const 1023
                        i32.sub
                        local.get 21
                        select
                        local.tee 28
                        i32.const -2960
                        local.get 8
                        local.get 8
                        i32.const -2960
                        i32.le_s
                        select
                        i32.const 1938
                        i32.add
                        local.get 8
                        i32.const 969
                        i32.add
                        local.get 22
                        select
                        local.tee 29
                        local.get 8
                        local.get 23
                        select
                        local.get 24
                        select
                        i32.const 1023
                        i32.add
                        i64.extend_i32_u
                        i64.const 52
                        i64.shl
                        f64.reinterpret_i64
                        f64.mul
                        local.set 3
                        local.get 4
                        i32.const 476
                        i32.add
                        local.tee 18
                        local.get 12
                        i32.const 2
                        i32.shl
                        i32.add
                        local.set 14
                        i32.const 23
                        local.get 8
                        i32.sub
                        i32.const 31
                        i32.and
                        local.set 30
                        i32.const 24
                        local.get 8
                        i32.sub
                        i32.const 31
                        i32.and
                        local.set 25
                        local.get 4
                        i32.const 312
                        i32.add
                        local.set 31
                        local.get 8
                        i32.const 1
                        i32.sub
                        local.set 32
                        local.get 12
                        local.set 5
                        block  ;; label = @11
                          loop  ;; label = @12
                            local.get 4
                            i32.const 320
                            i32.add
                            local.get 5
                            local.tee 6
                            i32.const 3
                            i32.shl
                            i32.add
                            f64.load
                            local.set 1
                            block  ;; label = @13
                              local.get 6
                              i32.eqz
                              br_if 0 (;@13;)
                              local.get 4
                              i32.const 480
                              i32.add
                              local.set 9
                              local.get 6
                              local.set 7
                              loop  ;; label = @14
                                local.get 1
                                f64.const 0x1p-24 (;=5.96046e-08;)
                                f64.mul
                                local.tee 2
                                f64.const -0x1p+31 (;=-2.14748e+09;)
                                f64.ge
                                local.set 5
                                local.get 1
                                i32.const 2147483647
                                local.get 2
                                f64.abs
                                f64.const 0x1p+31 (;=2.14748e+09;)
                                f64.lt
                                if (result i32)  ;; label = @15
                                  local.get 2
                                  i32.trunc_f64_s
                                else
                                  i32.const -2147483648
                                end
                                i32.const -2147483648
                                local.get 5
                                select
                                local.get 2
                                f64.const 0x1.fffffffcp+30 (;=2.14748e+09;)
                                f64.gt
                                select
                                i32.const 0
                                local.get 2
                                local.get 2
                                f64.eq
                                select
                                f64.convert_i32_s
                                local.tee 2
                                f64.const -0x1p+24 (;=-1.67772e+07;)
                                f64.mul
                                f64.add
                                local.tee 1
                                f64.const -0x1p+31 (;=-2.14748e+09;)
                                f64.ge
                                local.set 5
                                local.get 9
                                i32.const 2147483647
                                block (result i32)  ;; label = @15
                                  local.get 1
                                  f64.abs
                                  f64.const 0x1p+31 (;=2.14748e+09;)
                                  f64.lt
                                  if  ;; label = @16
                                    local.get 1
                                    i32.trunc_f64_s
                                    br 1 (;@15;)
                                  end
                                  i32.const -2147483648
                                end
                                i32.const -2147483648
                                local.get 5
                                select
                                local.get 1
                                f64.const 0x1.fffffffcp+30 (;=2.14748e+09;)
                                f64.gt
                                select
                                i32.const 0
                                local.get 1
                                local.get 1
                                f64.eq
                                select
                                i32.store
                                local.get 31
                                local.get 7
                                i32.const 3
                                i32.shl
                                i32.add
                                f64.load
                                local.get 2
                                f64.add
                                local.set 1
                                local.get 7
                                i32.const 2
                                i32.lt_u
                                local.tee 5
                                br_if 1 (;@13;)
                                local.get 9
                                i32.const 4
                                i32.add
                                local.set 9
                                i32.const 1
                                local.get 7
                                i32.const 1
                                i32.sub
                                local.get 5
                                select
                                local.tee 7
                                br_if 0 (;@14;)
                              end
                            end
                            block (result i32)  ;; label = @13
                              block  ;; label = @14
                                local.get 24
                                i32.eqz
                                if  ;; label = @15
                                  local.get 23
                                  br_if 1 (;@14;)
                                  local.get 8
                                  br 2 (;@13;)
                                end
                                local.get 1
                                f64.const 0x1p+1023 (;=8.98847e+307;)
                                f64.mul
                                local.tee 1
                                f64.const 0x1p+1023 (;=8.98847e+307;)
                                f64.mul
                                local.get 1
                                local.get 21
                                select
                                local.set 1
                                local.get 28
                                br 1 (;@13;)
                              end
                              local.get 1
                              f64.const 0x1p-969 (;=2.00417e-292;)
                              f64.mul
                              local.tee 1
                              f64.const 0x1p-969 (;=2.00417e-292;)
                              f64.mul
                              local.get 1
                              local.get 22
                              select
                              local.set 1
                              local.get 29
                            end
                            local.set 5
                            local.get 1
                            local.get 5
                            i32.const 1023
                            i32.add
                            i64.extend_i32_u
                            i64.const 52
                            i64.shl
                            f64.reinterpret_i64
                            f64.mul
                            local.tee 1
                            local.get 1
                            f64.const 0x1p-3 (;=0.125;)
                            f64.mul
                            f64.floor
                            f64.const -0x1p+3 (;=-8;)
                            f64.mul
                            f64.add
                            local.tee 1
                            f64.const -0x1p+31 (;=-2.14748e+09;)
                            f64.ge
                            local.set 5
                            local.get 1
                            i32.const 2147483647
                            block (result i32)  ;; label = @13
                              local.get 1
                              f64.abs
                              f64.const 0x1p+31 (;=2.14748e+09;)
                              f64.lt
                              if  ;; label = @14
                                local.get 1
                                i32.trunc_f64_s
                                br 1 (;@13;)
                              end
                              i32.const -2147483648
                            end
                            i32.const -2147483648
                            local.get 5
                            select
                            local.get 1
                            f64.const 0x1.fffffffcp+30 (;=2.14748e+09;)
                            f64.gt
                            select
                            i32.const 0
                            local.get 1
                            local.get 1
                            f64.eq
                            select
                            local.tee 19
                            f64.convert_i32_s
                            f64.sub
                            local.set 1
                            block (result i32)  ;; label = @13
                              block  ;; label = @14
                                block  ;; label = @15
                                  block  ;; label = @16
                                    block  ;; label = @17
                                      block (result i32)  ;; label = @18
                                        local.get 8
                                        i32.const 0
                                        i32.gt_s
                                        local.tee 33
                                        i32.eqz
                                        if  ;; label = @19
                                          local.get 8
                                          i32.eqz
                                          if  ;; label = @20
                                            local.get 18
                                            local.get 6
                                            i32.const 2
                                            i32.shl
                                            i32.add
                                            i32.load
                                            i32.const 23
                                            i32.shr_s
                                            br 2 (;@18;)
                                          end
                                          i32.const 2
                                          local.set 15
                                          i32.const 0
                                          local.get 1
                                          f64.const 0x1p-1 (;=0.5;)
                                          f64.ge
                                          i32.eqz
                                          br_if 6 (;@13;)
                                          drop
                                          br 2 (;@17;)
                                        end
                                        local.get 18
                                        local.get 6
                                        i32.const 2
                                        i32.shl
                                        i32.add
                                        local.tee 5
                                        local.get 5
                                        i32.load
                                        local.tee 5
                                        local.get 5
                                        local.get 25
                                        i32.shr_s
                                        local.tee 5
                                        local.get 25
                                        i32.shl
                                        i32.sub
                                        local.tee 7
                                        i32.store
                                        local.get 5
                                        local.get 19
                                        i32.add
                                        local.set 19
                                        local.get 7
                                        local.get 30
                                        i32.shr_s
                                      end
                                      local.tee 15
                                      i32.const 0
                                      i32.le_s
                                      br_if 1 (;@16;)
                                    end
                                    local.get 6
                                    br_if 1 (;@15;)
                                    i32.const 0
                                    local.set 9
                                    br 2 (;@14;)
                                  end
                                  local.get 15
                                  br 2 (;@13;)
                                end
                                i32.const 0
                                local.set 20
                                i32.const 0
                                local.set 9
                                local.get 6
                                i32.const 1
                                i32.ne
                                if  ;; label = @15
                                  local.get 6
                                  i32.const 30
                                  i32.and
                                  local.set 34
                                  local.get 4
                                  i32.const 480
                                  i32.add
                                  local.set 7
                                  loop  ;; label = @16
                                    local.get 7
                                    i32.load
                                    local.set 5
                                    i32.const 16777215
                                    local.set 10
                                    block (result i32)  ;; label = @17
                                      block  ;; label = @18
                                        local.get 9
                                        br_if 0 (;@18;)
                                        i32.const 16777216
                                        local.set 10
                                        local.get 5
                                        br_if 0 (;@18;)
                                        i32.const 1
                                        br 1 (;@17;)
                                      end
                                      local.get 7
                                      local.get 10
                                      local.get 5
                                      i32.sub
                                      i32.store
                                      i32.const 0
                                    end
                                    local.set 10
                                    local.get 7
                                    i32.const 4
                                    i32.add
                                    local.tee 35
                                    i32.load
                                    local.set 9
                                    i32.const 16777215
                                    local.set 5
                                    block (result i32)  ;; label = @17
                                      block  ;; label = @18
                                        local.get 10
                                        i32.eqz
                                        br_if 0 (;@18;)
                                        i32.const 16777216
                                        local.set 5
                                        local.get 9
                                        br_if 0 (;@18;)
                                        i32.const 0
                                        br 1 (;@17;)
                                      end
                                      local.get 35
                                      local.get 5
                                      local.get 9
                                      i32.sub
                                      i32.store
                                      i32.const 1
                                    end
                                    local.set 9
                                    local.get 7
                                    i32.const 8
                                    i32.add
                                    local.set 7
                                    local.get 34
                                    local.get 20
                                    i32.const 2
                                    i32.add
                                    local.tee 20
                                    i32.ne
                                    br_if 0 (;@16;)
                                  end
                                end
                                local.get 6
                                i32.const 1
                                i32.and
                                i32.eqz
                                br_if 0 (;@14;)
                                local.get 4
                                i32.const 480
                                i32.add
                                local.get 20
                                i32.const 2
                                i32.shl
                                i32.add
                                local.tee 10
                                i32.load
                                local.set 7
                                i32.const 16777215
                                local.set 5
                                block  ;; label = @15
                                  local.get 9
                                  br_if 0 (;@15;)
                                  i32.const 16777216
                                  local.set 5
                                  local.get 7
                                  br_if 0 (;@15;)
                                  i32.const 0
                                  local.set 9
                                  br 1 (;@14;)
                                end
                                local.get 10
                                local.get 5
                                local.get 7
                                i32.sub
                                i32.store
                                i32.const 1
                                local.set 9
                              end
                              block  ;; label = @14
                                local.get 33
                                i32.eqz
                                br_if 0 (;@14;)
                                i32.const 8388607
                                local.set 7
                                block  ;; label = @15
                                  block  ;; label = @16
                                    local.get 32
                                    br_table 1 (;@15;) 0 (;@16;) 2 (;@14;)
                                  end
                                  i32.const 4194303
                                  local.set 7
                                end
                                local.get 18
                                local.get 6
                                i32.const 2
                                i32.shl
                                i32.add
                                local.tee 5
                                local.get 5
                                i32.load
                                local.get 7
                                i32.and
                                i32.store
                              end
                              local.get 19
                              i32.const 1
                              i32.add
                              local.set 19
                              local.get 15
                              local.get 15
                              i32.const 2
                              i32.ne
                              br_if 0 (;@13;)
                              drop
                              f64.const 0x1p+0 (;=1;)
                              local.get 1
                              f64.sub
                              local.get 3
                              f64.const 0x0p+0 (;=0;)
                              local.get 9
                              select
                              f64.sub
                              local.set 1
                              i32.const 2
                            end
                            local.set 15
                            local.get 1
                            f64.const 0x0p+0 (;=0;)
                            f64.eq
                            if  ;; label = @13
                              local.get 14
                              local.set 7
                              local.get 6
                              local.set 5
                              block  ;; label = @14
                                local.get 12
                                local.get 6
                                i32.const 1
                                i32.sub
                                local.tee 9
                                i32.gt_u
                                br_if 0 (;@14;)
                                i32.const 0
                                local.set 10
                                loop  ;; label = @15
                                  block  ;; label = @16
                                    local.get 4
                                    i32.const 480
                                    i32.add
                                    local.get 9
                                    i32.const 2
                                    i32.shl
                                    i32.add
                                    i32.load
                                    local.get 10
                                    i32.or
                                    local.set 10
                                    local.get 9
                                    local.get 12
                                    i32.le_u
                                    br_if 0 (;@16;)
                                    local.get 12
                                    local.get 9
                                    local.get 9
                                    local.get 12
                                    i32.gt_u
                                    i32.sub
                                    local.tee 9
                                    i32.le_u
                                    br_if 1 (;@15;)
                                  end
                                end
                                local.get 6
                                local.set 5
                                local.get 10
                                i32.eqz
                                br_if 0 (;@14;)
                                local.get 6
                                i32.const 2
                                i32.shl
                                local.get 4
                                i32.add
                                i32.const 476
                                i32.add
                                local.set 7
                                loop  ;; label = @15
                                  local.get 6
                                  i32.const 1
                                  i32.sub
                                  local.set 6
                                  local.get 8
                                  i32.const 24
                                  i32.sub
                                  local.set 8
                                  local.get 7
                                  i32.load
                                  local.get 7
                                  i32.const 4
                                  i32.sub
                                  local.set 7
                                  i32.eqz
                                  br_if 0 (;@15;)
                                end
                                br 3 (;@11;)
                              end
                              loop  ;; label = @14
                                local.get 5
                                i32.const 1
                                i32.add
                                local.set 5
                                local.get 7
                                i32.load
                                local.get 7
                                i32.const 4
                                i32.sub
                                local.set 7
                                i32.eqz
                                br_if 0 (;@14;)
                              end
                              local.get 5
                              local.get 6
                              i32.le_u
                              br_if 1 (;@12;)
                              local.get 6
                              i32.const 1
                              i32.add
                              local.set 10
                              loop  ;; label = @14
                                local.get 4
                                local.get 10
                                i32.const 3
                                i32.shl
                                local.tee 6
                                i32.add
                                local.tee 7
                                local.get 10
                                local.get 17
                                i32.add
                                i32.const 2
                                i32.shl
                                i32.const 1049340
                                i32.add
                                i32.load
                                f64.convert_i32_s
                                f64.store
                                local.get 6
                                local.get 4
                                i32.const 320
                                i32.add
                                i32.add
                                local.get 13
                                f64.load
                                local.get 7
                                f64.load
                                f64.mul
                                f64.const 0x0p+0 (;=0;)
                                f64.add
                                f64.store
                                local.get 5
                                local.get 10
                                i32.le_u
                                br_if 2 (;@12;)
                                local.get 5
                                local.get 10
                                i32.gt_u
                                local.get 10
                                i32.add
                                local.tee 6
                                local.set 10
                                local.get 5
                                local.get 6
                                i32.ge_u
                                br_if 0 (;@14;)
                              end
                              br 1 (;@12;)
                            end
                          end
                          block  ;; label = @12
                            block  ;; label = @13
                              block  ;; label = @14
                                i32.const 0
                                local.get 8
                                i32.sub
                                local.tee 7
                                i32.const 1023
                                i32.le_s
                                if  ;; label = @15
                                  local.get 7
                                  i32.const -1022
                                  i32.ge_s
                                  br_if 3 (;@12;)
                                  local.get 1
                                  f64.const 0x1p-969 (;=2.00417e-292;)
                                  f64.mul
                                  local.set 1
                                  local.get 7
                                  i32.const -1992
                                  i32.le_u
                                  br_if 1 (;@14;)
                                  i32.const 969
                                  local.get 8
                                  i32.sub
                                  local.set 7
                                  br 3 (;@12;)
                                end
                                local.get 1
                                f64.const 0x1p+1023 (;=8.98847e+307;)
                                f64.mul
                                local.set 1
                                local.get 7
                                i32.const 2046
                                i32.gt_u
                                br_if 1 (;@13;)
                                i32.const -1023
                                local.get 8
                                i32.sub
                                local.set 7
                                br 2 (;@12;)
                              end
                              local.get 1
                              f64.const 0x1p-969 (;=2.00417e-292;)
                              f64.mul
                              local.set 1
                              i32.const -2960
                              local.get 7
                              local.get 7
                              i32.const -2960
                              i32.le_s
                              select
                              i32.const 1938
                              i32.add
                              local.set 7
                              br 1 (;@12;)
                            end
                            local.get 1
                            f64.const 0x1p+1023 (;=8.98847e+307;)
                            f64.mul
                            local.set 1
                            i32.const 3069
                            local.get 7
                            local.get 7
                            i32.const 3069
                            i32.ge_s
                            select
                            i32.const 2046
                            i32.sub
                            local.set 7
                          end
                          local.get 1
                          local.get 7
                          i32.const 1023
                          i32.add
                          i64.extend_i32_u
                          i64.const 52
                          i64.shl
                          f64.reinterpret_i64
                          f64.mul
                          local.tee 1
                          f64.const 0x1p+24 (;=1.67772e+07;)
                          f64.ge
                          if  ;; label = @12
                            local.get 1
                            f64.const 0x1p-24 (;=5.96046e-08;)
                            f64.mul
                            local.tee 2
                            f64.const -0x1p+31 (;=-2.14748e+09;)
                            f64.ge
                            local.set 5
                            local.get 1
                            i32.const 2147483647
                            block (result i32)  ;; label = @13
                              local.get 2
                              f64.abs
                              f64.const 0x1p+31 (;=2.14748e+09;)
                              f64.lt
                              if  ;; label = @14
                                local.get 2
                                i32.trunc_f64_s
                                br 1 (;@13;)
                              end
                              i32.const -2147483648
                            end
                            i32.const -2147483648
                            local.get 5
                            select
                            local.get 2
                            f64.const 0x1.fffffffcp+30 (;=2.14748e+09;)
                            f64.gt
                            select
                            i32.const 0
                            local.get 2
                            local.get 2
                            f64.eq
                            select
                            f64.convert_i32_s
                            local.tee 1
                            f64.const -0x1p+24 (;=-1.67772e+07;)
                            f64.mul
                            f64.add
                            local.tee 2
                            f64.const -0x1p+31 (;=-2.14748e+09;)
                            f64.ge
                            local.set 5
                            local.get 4
                            i32.const 480
                            i32.add
                            local.get 6
                            i32.const 2
                            i32.shl
                            i32.add
                            i32.const 2147483647
                            block (result i32)  ;; label = @13
                              local.get 2
                              f64.abs
                              f64.const 0x1p+31 (;=2.14748e+09;)
                              f64.lt
                              if  ;; label = @14
                                local.get 2
                                i32.trunc_f64_s
                                br 1 (;@13;)
                              end
                              i32.const -2147483648
                            end
                            i32.const -2147483648
                            local.get 5
                            select
                            local.get 2
                            f64.const 0x1.fffffffcp+30 (;=2.14748e+09;)
                            f64.gt
                            select
                            i32.const 0
                            local.get 2
                            local.get 2
                            f64.eq
                            select
                            i32.store
                            local.get 11
                            local.get 27
                            i32.add
                            local.set 8
                            local.get 6
                            i32.const 1
                            i32.add
                            local.set 6
                          end
                          local.get 1
                          f64.const -0x1p+31 (;=-2.14748e+09;)
                          f64.ge
                          local.set 5
                          local.get 4
                          i32.const 480
                          i32.add
                          local.get 6
                          i32.const 2
                          i32.shl
                          i32.add
                          i32.const 2147483647
                          block (result i32)  ;; label = @12
                            local.get 1
                            f64.abs
                            f64.const 0x1p+31 (;=2.14748e+09;)
                            f64.lt
                            if  ;; label = @13
                              local.get 1
                              i32.trunc_f64_s
                              br 1 (;@12;)
                            end
                            i32.const -2147483648
                          end
                          i32.const -2147483648
                          local.get 5
                          select
                          local.get 1
                          f64.const 0x1.fffffffcp+30 (;=2.14748e+09;)
                          f64.gt
                          select
                          i32.const 0
                          local.get 1
                          local.get 1
                          f64.eq
                          select
                          i32.store
                        end
                        block (result f64)  ;; label = @11
                          block  ;; label = @12
                            block  ;; label = @13
                              local.get 8
                              i32.const 1023
                              i32.le_s
                              if  ;; label = @14
                                f64.const 0x1p+0 (;=1;)
                                local.get 8
                                i32.const -1022
                                i32.ge_s
                                br_if 3 (;@11;)
                                drop
                                local.get 8
                                i32.const -1992
                                i32.le_u
                                br_if 1 (;@13;)
                                local.get 8
                                i32.const 969
                                i32.add
                                local.set 8
                                f64.const 0x1p-969 (;=2.00417e-292;)
                                br 3 (;@11;)
                              end
                              local.get 8
                              i32.const 2046
                              i32.gt_u
                              br_if 1 (;@12;)
                              local.get 8
                              i32.const 1023
                              i32.sub
                              local.set 8
                              f64.const 0x1p+1023 (;=8.98847e+307;)
                              br 2 (;@11;)
                            end
                            i32.const -2960
                            local.get 8
                            local.get 8
                            i32.const -2960
                            i32.le_s
                            select
                            i32.const 1938
                            i32.add
                            local.set 8
                            f64.const 0x0p+0 (;=0;)
                            br 1 (;@11;)
                          end
                          i32.const 3069
                          local.get 8
                          local.get 8
                          i32.const 3069
                          i32.ge_s
                          select
                          i32.const 2046
                          i32.sub
                          local.set 8
                          f64.const inf (;=inf;)
                        end
                        local.get 8
                        i32.const 1023
                        i32.add
                        i64.extend_i32_u
                        i64.const 52
                        i64.shl
                        f64.reinterpret_i64
                        f64.mul
                        local.set 1
                        local.get 6
                        i32.const 1
                        i32.and
                        if (result i32)  ;; label = @11
                          local.get 6
                        else
                          local.get 4
                          i32.const 320
                          i32.add
                          local.get 6
                          i32.const 3
                          i32.shl
                          i32.add
                          local.get 1
                          local.get 4
                          i32.const 480
                          i32.add
                          local.get 6
                          i32.const 2
                          i32.shl
                          i32.add
                          i32.load
                          f64.convert_i32_s
                          f64.mul
                          f64.store
                          local.get 1
                          f64.const 0x1p-24 (;=5.96046e-08;)
                          f64.mul
                          local.set 1
                          local.get 6
                          i32.const 1
                          i32.sub
                        end
                        local.set 11
                        local.get 6
                        if  ;; label = @11
                          local.get 11
                          i32.const 3
                          i32.shl
                          local.get 4
                          i32.add
                          i32.const 312
                          i32.add
                          local.set 7
                          local.get 11
                          i32.const 2
                          i32.shl
                          local.get 4
                          i32.add
                          i32.const 476
                          i32.add
                          local.set 5
                          loop  ;; label = @12
                            local.get 7
                            local.get 1
                            f64.const 0x1p-24 (;=5.96046e-08;)
                            f64.mul
                            local.tee 2
                            local.get 5
                            i32.load
                            f64.convert_i32_s
                            f64.mul
                            f64.store
                            local.get 7
                            i32.const 8
                            i32.add
                            local.get 1
                            local.get 5
                            i32.const 4
                            i32.add
                            i32.load
                            f64.convert_i32_s
                            f64.mul
                            f64.store
                            local.get 7
                            i32.const 16
                            i32.sub
                            local.set 7
                            local.get 5
                            i32.const 8
                            i32.sub
                            local.set 5
                            local.get 2
                            f64.const 0x1p-24 (;=5.96046e-08;)
                            f64.mul
                            local.set 1
                            local.get 11
                            i32.const 1
                            i32.ne
                            local.get 11
                            i32.const 2
                            i32.sub
                            local.set 11
                            br_if 0 (;@12;)
                          end
                        end
                        local.get 6
                        i32.const 1
                        i32.add
                        local.set 10
                        local.get 4
                        i32.const 320
                        i32.add
                        local.get 6
                        i32.const 3
                        i32.shl
                        i32.add
                        local.set 9
                        local.get 6
                        local.set 7
                        loop  ;; label = @11
                          block  ;; label = @12
                            local.get 12
                            local.get 6
                            local.get 7
                            local.tee 11
                            i32.sub
                            local.tee 14
                            local.get 12
                            local.get 14
                            i32.lt_u
                            select
                            local.tee 8
                            i32.eqz
                            if  ;; label = @13
                              i32.const 0
                              local.set 5
                              f64.const 0x0p+0 (;=0;)
                              local.set 1
                              br 1 (;@12;)
                            end
                            local.get 8
                            i32.const 1
                            i32.add
                            i32.const -2
                            i32.and
                            local.set 17
                            f64.const 0x0p+0 (;=0;)
                            local.set 1
                            i32.const 0
                            local.set 7
                            i32.const 0
                            local.set 5
                            loop  ;; label = @13
                              local.get 1
                              local.get 7
                              i32.const 1049608
                              i32.add
                              f64.load
                              local.get 7
                              local.get 9
                              i32.add
                              local.tee 18
                              f64.load
                              f64.mul
                              f64.add
                              local.get 7
                              i32.const 1049616
                              i32.add
                              f64.load
                              local.get 18
                              i32.const 8
                              i32.add
                              f64.load
                              f64.mul
                              f64.add
                              local.set 1
                              local.get 7
                              i32.const 16
                              i32.add
                              local.set 7
                              local.get 17
                              local.get 5
                              i32.const 2
                              i32.add
                              local.tee 5
                              i32.ne
                              br_if 0 (;@13;)
                            end
                          end
                          local.get 4
                          i32.const 160
                          i32.add
                          local.get 14
                          i32.const 3
                          i32.shl
                          i32.add
                          local.get 8
                          i32.const 1
                          i32.and
                          if (result f64)  ;; label = @12
                            local.get 1
                          else
                            local.get 1
                            local.get 5
                            i32.const 3
                            i32.shl
                            i32.const 1049608
                            i32.add
                            f64.load
                            local.get 4
                            i32.const 320
                            i32.add
                            local.get 5
                            local.get 11
                            i32.add
                            i32.const 3
                            i32.shl
                            i32.add
                            f64.load
                            f64.mul
                            f64.add
                          end
                          f64.store
                          local.get 9
                          i32.const 8
                          i32.sub
                          local.set 9
                          local.get 11
                          i32.const 1
                          i32.sub
                          local.set 7
                          local.get 11
                          br_if 0 (;@11;)
                        end
                        block  ;; label = @11
                          local.get 10
                          i32.const 3
                          i32.and
                          local.tee 11
                          i32.eqz
                          if  ;; label = @12
                            f64.const 0x0p+0 (;=0;)
                            local.set 1
                            local.get 6
                            local.set 5
                            br 1 (;@11;)
                          end
                          local.get 4
                          i32.const 160
                          i32.add
                          local.get 6
                          i32.const 3
                          i32.shl
                          i32.add
                          local.set 7
                          f64.const 0x0p+0 (;=0;)
                          local.set 1
                          local.get 6
                          local.set 5
                          loop  ;; label = @12
                            local.get 5
                            i32.const 1
                            i32.sub
                            local.set 5
                            local.get 1
                            local.get 7
                            f64.load
                            f64.add
                            local.set 1
                            local.get 7
                            i32.const 8
                            i32.sub
                            local.set 7
                            local.get 11
                            i32.const 1
                            i32.sub
                            local.tee 11
                            br_if 0 (;@12;)
                          end
                        end
                        local.get 6
                        i32.const 3
                        i32.ge_u
                        if  ;; label = @11
                          local.get 5
                          i32.const 3
                          i32.shl
                          local.get 4
                          i32.add
                          i32.const 136
                          i32.add
                          local.set 7
                          loop  ;; label = @12
                            local.get 1
                            local.get 7
                            i32.const 24
                            i32.add
                            f64.load
                            f64.add
                            local.get 7
                            i32.const 16
                            i32.add
                            f64.load
                            f64.add
                            local.get 7
                            i32.const 8
                            i32.add
                            f64.load
                            f64.add
                            local.get 7
                            f64.load
                            f64.add
                            local.set 1
                            local.get 7
                            i32.const 32
                            i32.sub
                            local.set 7
                            local.get 5
                            i32.const 3
                            i32.ne
                            local.get 5
                            i32.const 4
                            i32.sub
                            local.set 5
                            br_if 0 (;@12;)
                          end
                        end
                        local.get 1
                        f64.neg
                        local.get 1
                        local.get 15
                        select
                        f64.store
                        local.get 4
                        i32.const 560
                        i32.add
                        global.set 0
                        local.get 19
                        i32.const 7
                        i32.and
                        local.set 6
                        local.get 16
                        i32.const 0
                        i32.ge_s
                        if  ;; label = @11
                          local.get 13
                          f64.load offset=8
                          br 1 (;@10;)
                        end
                        i32.const 0
                        local.get 6
                        i32.sub
                        local.set 6
                        local.get 13
                        f64.load offset=8
                        f64.neg
                      end
                      local.set 1
                      local.get 6
                      i32.const 3
                      i32.and
                      br_table 2 (;@7;) 3 (;@6;) 4 (;@5;) 1 (;@8;)
                    end
                    local.get 0
                    local.get 0
                    f32.sub
                    local.set 0
                    br 7 (;@1;)
                  end
                  local.get 1
                  local.get 1
                  f64.mul
                  local.tee 1
                  f64.const -0x1.ffffffd0c5e81p-2 (;=-0.5;)
                  f64.mul
                  f64.const 0x1p+0 (;=1;)
                  f64.add
                  local.get 1
                  local.get 1
                  f64.mul
                  local.tee 2
                  f64.const 0x1.55553e1053a42p-5 (;=0.0416666;)
                  f64.mul
                  f64.add
                  local.get 1
                  local.get 2
                  f64.mul
                  local.get 1
                  f64.const 0x1.99342e0ee5069p-16 (;=2.43904e-05;)
                  f64.mul
                  f64.const -0x1.6c087e80f1e27p-10 (;=-0.00138868;)
                  f64.add
                  f64.mul
                  f64.add
                  f32.demote_f64
                  f32.neg
                  local.set 0
                  br 6 (;@1;)
                end
                local.get 1
                local.get 1
                local.get 1
                f64.mul
                local.tee 2
                f64.mul
                local.tee 3
                local.get 2
                local.get 2
                f64.mul
                f64.mul
                local.get 2
                f64.const 0x1.6cd878c3b46a7p-19 (;=2.71831e-06;)
                f64.mul
                f64.const -0x1.a00f9e2cae774p-13 (;=-0.000198393;)
                f64.add
                f64.mul
                local.get 1
                local.get 3
                local.get 2
                f64.const 0x1.11110896efbb2p-7 (;=0.00833333;)
                f64.mul
                f64.const -0x1.5555554cbac77p-3 (;=-0.166667;)
                f64.add
                f64.mul
                f64.add
                f64.add
                f32.demote_f64
                local.set 0
                br 5 (;@1;)
              end
              local.get 1
              local.get 1
              f64.mul
              local.tee 1
              f64.const -0x1.ffffffd0c5e81p-2 (;=-0.5;)
              f64.mul
              f64.const 0x1p+0 (;=1;)
              f64.add
              local.get 1
              local.get 1
              f64.mul
              local.tee 2
              f64.const 0x1.55553e1053a42p-5 (;=0.0416666;)
              f64.mul
              f64.add
              local.get 1
              local.get 2
              f64.mul
              local.get 1
              f64.const 0x1.99342e0ee5069p-16 (;=2.43904e-05;)
              f64.mul
              f64.const -0x1.6c087e80f1e27p-10 (;=-0.00138868;)
              f64.add
              f64.mul
              f64.add
              f32.demote_f64
              local.set 0
              br 4 (;@1;)
            end
            local.get 1
            local.get 1
            f64.mul
            local.tee 2
            local.get 1
            f64.neg
            f64.mul
            local.tee 3
            local.get 2
            local.get 2
            f64.mul
            f64.mul
            local.get 2
            f64.const 0x1.6cd878c3b46a7p-19 (;=2.71831e-06;)
            f64.mul
            f64.const -0x1.a00f9e2cae774p-13 (;=-0.000198393;)
            f64.add
            f64.mul
            local.get 3
            local.get 2
            f64.const 0x1.11110896efbb2p-7 (;=0.00833333;)
            f64.mul
            f64.const -0x1.5555554cbac77p-3 (;=-0.166667;)
            f64.add
            f64.mul
            local.get 1
            f64.sub
            f64.add
            f32.demote_f64
            local.set 0
            br 3 (;@1;)
          end
          local.get 6
          i32.const 1085271520
          i32.ge_u
          if  ;; label = @4
            f64.const -0x1.921fb54442d18p+2 (;=-6.28319;)
            f64.const 0x1.921fb54442d18p+2 (;=6.28319;)
            local.get 16
            i32.const 0
            i32.ge_s
            select
            local.get 1
            f64.add
            local.tee 2
            local.get 2
            local.get 2
            f64.mul
            local.tee 1
            f64.mul
            local.tee 3
            local.get 1
            local.get 1
            f64.mul
            f64.mul
            local.get 1
            f64.const 0x1.6cd878c3b46a7p-19 (;=2.71831e-06;)
            f64.mul
            f64.const -0x1.a00f9e2cae774p-13 (;=-0.000198393;)
            f64.add
            f64.mul
            local.get 2
            local.get 3
            local.get 1
            f64.const 0x1.11110896efbb2p-7 (;=0.00833333;)
            f64.mul
            f64.const -0x1.5555554cbac77p-3 (;=-0.166667;)
            f64.add
            f64.mul
            f64.add
            f64.add
            f32.demote_f64
            local.set 0
            br 3 (;@1;)
          end
          local.get 16
          i32.const 0
          i32.ge_s
          if  ;; label = @4
            local.get 1
            f64.const -0x1.2d97c7f3321d2p+2 (;=-4.71239;)
            f64.add
            local.tee 1
            local.get 1
            f64.mul
            local.tee 1
            f64.const -0x1.ffffffd0c5e81p-2 (;=-0.5;)
            f64.mul
            f64.const 0x1p+0 (;=1;)
            f64.add
            local.get 1
            local.get 1
            f64.mul
            local.tee 2
            f64.const 0x1.55553e1053a42p-5 (;=0.0416666;)
            f64.mul
            f64.add
            local.get 1
            local.get 2
            f64.mul
            local.get 1
            f64.const 0x1.99342e0ee5069p-16 (;=2.43904e-05;)
            f64.mul
            f64.const -0x1.6c087e80f1e27p-10 (;=-0.00138868;)
            f64.add
            f64.mul
            f64.add
            f32.demote_f64
            f32.neg
            local.set 0
            br 3 (;@1;)
          end
          local.get 1
          f64.const 0x1.2d97c7f3321d2p+2 (;=4.71239;)
          f64.add
          local.tee 1
          local.get 1
          f64.mul
          local.tee 1
          f64.const -0x1.ffffffd0c5e81p-2 (;=-0.5;)
          f64.mul
          f64.const 0x1p+0 (;=1;)
          f64.add
          local.get 1
          local.get 1
          f64.mul
          local.tee 2
          f64.const 0x1.55553e1053a42p-5 (;=0.0416666;)
          f64.mul
          f64.add
          local.get 1
          local.get 2
          f64.mul
          local.get 1
          f64.const 0x1.99342e0ee5069p-16 (;=2.43904e-05;)
          f64.mul
          f64.const -0x1.6c087e80f1e27p-10 (;=-0.00138868;)
          f64.add
          f64.mul
          f64.add
          f32.demote_f64
          local.set 0
          br 2 (;@1;)
        end
        local.get 6
        i32.const 1075235812
        i32.ge_u
        if  ;; label = @3
          f64.const -0x1.921fb54442d18p+1 (;=-3.14159;)
          f64.const 0x1.921fb54442d18p+1 (;=3.14159;)
          local.get 16
          i32.const 0
          i32.ge_s
          select
          local.get 1
          f64.add
          local.tee 2
          local.get 2
          f64.mul
          local.tee 1
          local.get 2
          f64.neg
          f64.mul
          local.tee 3
          local.get 1
          local.get 1
          f64.mul
          f64.mul
          local.get 1
          f64.const 0x1.6cd878c3b46a7p-19 (;=2.71831e-06;)
          f64.mul
          f64.const -0x1.a00f9e2cae774p-13 (;=-0.000198393;)
          f64.add
          f64.mul
          local.get 3
          local.get 1
          f64.const 0x1.11110896efbb2p-7 (;=0.00833333;)
          f64.mul
          f64.const -0x1.5555554cbac77p-3 (;=-0.166667;)
          f64.add
          f64.mul
          local.get 2
          f64.sub
          f64.add
          f32.demote_f64
          local.set 0
          br 2 (;@1;)
        end
        local.get 16
        i32.const 0
        i32.ge_s
        if  ;; label = @3
          local.get 1
          f64.const -0x1.921fb54442d18p+0 (;=-1.5708;)
          f64.add
          local.tee 1
          local.get 1
          f64.mul
          local.tee 1
          f64.const -0x1.ffffffd0c5e81p-2 (;=-0.5;)
          f64.mul
          f64.const 0x1p+0 (;=1;)
          f64.add
          local.get 1
          local.get 1
          f64.mul
          local.tee 2
          f64.const 0x1.55553e1053a42p-5 (;=0.0416666;)
          f64.mul
          f64.add
          local.get 1
          local.get 2
          f64.mul
          local.get 1
          f64.const 0x1.99342e0ee5069p-16 (;=2.43904e-05;)
          f64.mul
          f64.const -0x1.6c087e80f1e27p-10 (;=-0.00138868;)
          f64.add
          f64.mul
          f64.add
          f32.demote_f64
          local.set 0
          br 2 (;@1;)
        end
        local.get 1
        f64.const 0x1.921fb54442d18p+0 (;=1.5708;)
        f64.add
        local.tee 1
        local.get 1
        f64.mul
        local.tee 1
        f64.const -0x1.ffffffd0c5e81p-2 (;=-0.5;)
        f64.mul
        f64.const 0x1p+0 (;=1;)
        f64.add
        local.get 1
        local.get 1
        f64.mul
        local.tee 2
        f64.const 0x1.55553e1053a42p-5 (;=0.0416666;)
        f64.mul
        f64.add
        local.get 1
        local.get 2
        f64.mul
        local.get 1
        f64.const 0x1.99342e0ee5069p-16 (;=2.43904e-05;)
        f64.mul
        f64.const -0x1.6c087e80f1e27p-10 (;=-0.00138868;)
        f64.add
        f64.mul
        f64.add
        f32.demote_f64
        f32.neg
        local.set 0
        br 1 (;@1;)
      end
      local.get 6
      i32.const 964689920
      i32.ge_u
      if  ;; label = @2
        local.get 1
        local.get 1
        f64.mul
        local.tee 2
        local.get 1
        f64.mul
        local.tee 3
        local.get 2
        local.get 2
        f64.mul
        f64.mul
        local.get 2
        f64.const 0x1.6cd878c3b46a7p-19 (;=2.71831e-06;)
        f64.mul
        f64.const -0x1.a00f9e2cae774p-13 (;=-0.000198393;)
        f64.add
        f64.mul
        local.get 3
        local.get 2
        f64.const 0x1.11110896efbb2p-7 (;=0.00833333;)
        f64.mul
        f64.const -0x1.5555554cbac77p-3 (;=-0.166667;)
        f64.add
        f64.mul
        local.get 1
        f64.add
        f64.add
        f32.demote_f64
        local.set 0
        br 1 (;@1;)
      end
      local.get 13
      local.get 0
      f32.const 0x1p-120 (;=7.52316e-37;)
      f32.mul
      local.get 0
      f32.const 0x1p+120 (;=1.32923e+36;)
      f32.add
      local.get 6
      i32.const 8388608
      i32.lt_u
      select
      f32.store offset=8
      local.get 13
      f32.load offset=8
      drop
    end
    local.get 13
    i32.const 16
    i32.add
    global.set 0
    local.get 0)

(export "sin" (func $sin))
)
