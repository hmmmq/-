package com.example.demo.service;

import com.example.demo.entity.User;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author demo
 * @since 2024-09-12
 */
public interface IUserService extends IService<User> {
    User getUsernameAndPassword(String username, String password);

}
