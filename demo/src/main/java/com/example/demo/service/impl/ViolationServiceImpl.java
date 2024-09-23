package com.example.demo.service.impl;

import com.example.demo.entity.Violation;
import com.example.demo.mapper.ViolationMapper;
import com.example.demo.service.IViolationService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author demo
 * @since 2024-09-12
 */
@Service
public class ViolationServiceImpl extends ServiceImpl<ViolationMapper, Violation> implements IViolationService {

}
