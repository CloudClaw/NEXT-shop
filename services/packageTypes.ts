import { axiosInstance } from './axios-instance';
import { ApiRoutes } from './constants';
import { PackageType } from '@prisma/client';

export const getAll = async (): Promise<PackageType[]> => {
  return (await axiosInstance.get<PackageType[]>(ApiRoutes.PACKAGE_TYPES)).data;
};